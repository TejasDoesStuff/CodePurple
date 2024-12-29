function NavBox({stuff}) {

    return (
        <div className="bg-codePurple w-[50vw] h-96 border-white border-2 rounded-xl mb-24 overflow-hidden">
            <div className="flex justify-center items-center h-full text-white text-2xl font-semibold font-cooper m-4">
                {stuff}
            </div>
        </div>
    );
}

export default NavBox;