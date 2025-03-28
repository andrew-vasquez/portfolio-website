const Icons = ({name, image}) => {
    return(
        <>
        <div className="flex flex-col justify-center items-center">
            <div className="inline-flex flex-col justify-center items-center p-2 border rounded-md border-zinc-500 bg-zinc-900">
                <img className="w-9 h-9" src={image} alt={name} />
            </div>
            <span className="text-zinc-400 text-sm mt-1 font-sans">{name}</span>
        </div>
        </>
    )
}

export default Icons;