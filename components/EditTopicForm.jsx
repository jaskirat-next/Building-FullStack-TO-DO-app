
export default function EditTopicForm() {
    return (
        <form className="flex flex-col gap-3">
            <input className="border border-slate-300 px-8 py-2" type="text" placeholder="Topic Title" />
            <input className="border border-slate-300 px-8 py-2" type="text" placeholder="Update Description" />
            <button className="bg-green-600 py-3 px-6 w-fit font-bold" >Update Topic</button>

        </form>
    );
}