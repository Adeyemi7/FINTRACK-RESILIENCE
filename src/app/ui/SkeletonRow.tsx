const SkeletonRow = () => {
  return (
    <tr className="animate-pulse">
      {[...Array(5)].map((_, i) => (
        <td key={i} className="px-4 py-2">
          <div className="h-4 bg-gray-200 rounded w-full skeleton-shimmer"></div>
        </td>
      ))}
    </tr>
  );
};

export default SkeletonRow;
