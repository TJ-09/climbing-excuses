import { supabase } from '../../utils/supabaseClient'

export default async function handler(req, res) {

    // destructure the name and content received in the request body.

    let { name, excuse } = req.body

    if (!name) {
        // if we don't have a name them make it anon
        name = 'anon';
    }
    if (!excuse) {

    }

    const { data, error } = await supabase
        .from('excuses')
        .insert([
            {
                excuse_text: excuse,
                submitted_by: name,
                published: false,
            }
        ])

    // Send a 400 response if something went wrong

    if (error) return res.status(400).json({ error: error.message })

    // Send 200 success if there were no errors!

    // and also return a copy of the object we received from Supabase

    return res.status(200).json({ data: data })
}