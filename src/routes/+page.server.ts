export async function load({ locals }) {
	const session = await locals.getSession();
	const user = session?.user;

	const { data } = await locals.supabase.from('scores').select('*').eq('user_id', user?.id);
	return {
		score: data ?? []
	};
}
