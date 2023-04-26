import FilterBTN from '../FilterBTN'

const Species = () => {
    let species = [
        'Human',
        'Alien',
        'Humanoid',
        'Poopybutthole',
        'Mythological',
        'Unknown',
        'Animal',
        'Disease',
        'Robot',
        'Cronenberg',
        'Planet',
    ]

    return (
        <div className=" BoxFilter space-y-4 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <h3 className="text-2xl font-medium text-white-800 ">Species</h3>

            <div className="grid grid-cols-2 gap-4">
                {species.map((state, index) => (
                    <FilterBTN key={index} index={index} name="species" items={state} />
                ))}
            </div>
        </div>
    )
}
export default Species
