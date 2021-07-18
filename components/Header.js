import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { signOut, useSession } from 'next-auth/client'


function Header () {

    const [session] = useSession();

    return (
        <div
            className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white"
        >
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="hidden md:inline-block h-20 w-20 border-0"
            >
                <Icon name="menu" size="3xl" />
            </Button>
            <Icon 
                name="description"
                size="5xl"
                color="blue"
            />

            <h1
                className="hidden md:inline-block ml-2 text-gray-700 text-2xl"
            >
                Docs
            </h1>

            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-50 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <Icon name="search" size="3xl" color="gray" />
                <input type="text" placeholder="Search" className="flex-grow px-5 text-base bg-transparent outline-none" />
            </div>

            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="hidden md:inline-block ml-3 md:ml-20 h-20 w-20 border-0"
            >
                <Icon name="apps" size="3xl" color="gray" />
            </Button>

            <img 
                onClick={signOut}
                loading="lazy"
                className="cursor-pointer h12 w-12 rounded-full ml-2 mr-4"
                src={session?.user?.image}
                alt=""
            />
        </div>
    )
}

export default Header