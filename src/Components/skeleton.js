const SkeletonCard = () => {
    return (
        <div >
        <div className="shadow-md p-4 animate-pulse">
            <div className="w-60 h-60 bg-gray-300 rounded"></div>
            <div className="mt-4 h-6 bg-gray-300 rounded w-3/4"></div>
            
        </div>
        </div>
    );
};

const Skeleton = () => {
    return (
        <div className="container mx-auto mt-8 px-4">
            <div className=" pl-16 pr-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 pt-28">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />

            </div>
        </div>
    );
};

export default Skeleton;