export default function addTopic() {
    return (
        <>
        <form className="flex flex-col gap-3">
            <input className="border border-slate-300 px-8 py-2" type="text" placeholder="Topic Title" />
            <input className="border border-slate-300 px-8 py-2" type="text" placeholder="Topic Description" />
            <button className="bg-green-600 py-3 px-6 w-fit font-bold" >Add Topic</button>

        </form>
        </>
    );
}