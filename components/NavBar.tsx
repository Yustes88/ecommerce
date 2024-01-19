import { getCart } from "@/lib/db/cart";
import Link from "next/link";
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authUtils";

async function searchProducts(formData:FormData) {
    "use server"

    const searchQuery = formData.get('searchQuery')?.toString();

    if(searchQuery) {
        redirect('/search?query=' + searchQuery)
    }
}

async function NavBar() {
    const cart = await getCart()
    const session = await getServerSession(authOptions)

    return(
        <div className="bg-base-100">
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <Link href='/' className="btn btn-ghost text-xl normal-case">
                        Home
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <form action={searchProducts}>
                        <div className="form-control">
                            <input name="searchQuery" placeholder="Search" className="input input-bordered w-full min-w-[100px]" type="text" />
                        </div>
                    </form>
                    <ShoppingCartButton cart={cart}/>
                    <UserMenuButton session={session}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;