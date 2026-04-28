export default async function EditView({ params }:{params: Promise<{ id: string }>}) {
    const { id } = await params;
    return (
        <h1>A pre-populated form with things to edit about a movie: {id}</h1>
    )
}