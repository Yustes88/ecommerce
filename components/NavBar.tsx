import Link from "next/link";
import { redirect } from "next/navigation";

async function searchProducts(formData:FormData) {
    "use seerver"

    const searchQuery = formData.get('searchQuery')?.toString();

    if(searchQuery) {
        redirect('/search?query=' + searchQuery)
    }
}

function NavBar() {
    return(
        <div className="bg-base-100">
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <Link href='/' className="btn btn-ghost text-xl normal-case">
                        Home
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <form>
                        <div className="fomr-control">
                            <input name="searchQuery" placeholder="Search" className="input input-bordered w-full min-w-[100px]" type="text" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NavBar;