import Skeleton from "react-loading-skeleton";

const Shimmer = () => {
  return (
    <div>
          <Skeleton height={24} width={300} />
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-4">
              <Skeleton circle={true} height={48} width={48} />
              <div>
                <Skeleton height={20} width={200} />
                <Skeleton height={15} width={150} />
              </div>
              <Skeleton height={32} width={100} />
            </div>
            <div className="flex gap-4">
              <Skeleton height={32} width={80} />
              <Skeleton height={32} width={80} />
              <Skeleton height={32} width={80} />
            </div>
          </div>
          <Skeleton height={100} width="100%" className="mt-4" />
        </div>
  )
}

export default Shimmer