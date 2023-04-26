import FilterBTN from '../FilterBTN'

const Gender = () => {
    let genders = ['female', 'male', 'genderless', 'unknown']

    return (
        <div className=" BoxFilter space-y-4 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " >
            <h3 className=" text-2xl font-medium text-white-800">Gender</h3>

            <div className="grid grid-cols-2 gap-4">
                {genders.map((state, index) => (
                    <FilterBTN key={index} index={index} name="gender" items={state} />
                ))}
            </div>
        </div>
    )
}
export default Gender
