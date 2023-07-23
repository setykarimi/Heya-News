const Loading = () => {
    return (
        <div
            class="flex justify-center mx-auto h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-blue-500 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden mx-auto !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            ></span>
        </div>
    );
}

export default Loading;