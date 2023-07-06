const CardLanguage = () => {
    return (
        <div className="bg-white rounded-xl h-fit mt-4">
            <h2 className='text-xl text-blue-gray-950 font-bold mb-4 p-8 border-b border-gray-100'>
                Language
            </h2>
            <ul class="p-4 space-y-1 text-sm text-gray-700" >
                <li>
                    <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div class="flex items-center h-5">
                            <input id="persian" name="lang" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                            <label htmlFor="persian">
                                <span className="mx-2 text-gray-700 font-medium">Persian</span>
                            </label>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div class="flex items-center h-5">
                            <input id="English" name="lang" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                            <label htmlFor="English">
                                <span className="mx-2 text-gray-700 font-medium">English</span>
                            </label>
                        </div>
                    </div>
                </li>
              

            </ul>
        </div>
    );
}

export default CardLanguage;