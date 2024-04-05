export default function Login(){
    return(
    <div>
    <h1>Login</h1>
    <form>
    <input
    id="amount"
    name="amount"
    type="number"
    placeholder="Enter USD amount"
    className="peer block w-half rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
    required
    />
    </form>
    </div>
    );
}