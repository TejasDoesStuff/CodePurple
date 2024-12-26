function NavBox({stuff}) {

    return (
        <div className="bg-codePurple w-96 h-96 border-white border-2 rounded-xl mb-24">
            <div className="flex justify-center items-center h-full text-white text-xl font-semibold font-cooper mx-4">
                {stuff}
            </div>
        </div>
    );
}

export default NavBox;