<input
  type="checkbox"
  checked={transaction.approved}
  onChange={(e) => setTransaction({...transaction, approved: e.target.checked })}
/>
const handleViewMore = () => {
  if (hasMore) {
    setTransactions((prevTransactions) => [...prevTransactions,...newTransactions]);
  }
};


return (
  <button onClick={handleViewMore} disabled={!hasMore}>
    View More
  </button>
);