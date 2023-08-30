export async function load({ locals }) {
	const { data } = await locals.supabase.from('scores').select();

	return {
		score: data ?? []
	};
}
