export default function Header(){
    return (
        <header className="flex justify-between px-8 items-center h-20 bg-gray-800 text-white">
            <h2>System Trips</h2>
            <div>
                <button className="bg-white-500 text-gray-800 px-4 py-2 rounded hover:border-white">Login</button>
            </div>
        </header>
    );  
}