export default async function Movie({params}:{params: Promise<{ id: string}>}) {
    const { id } = await params;
    
    return (
        <>
        <h1>Single movie:</h1>
        <h1>Id: {id}</h1>
        </>
    )
}