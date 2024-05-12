function Pagination({ 
    data, 
    onHandleCurrentPage, 
    currentPage, 
    totalPages, 
    onFirstPage, 
    onPreviousPage, 
    onNextPage, 
    onLastPage 
}) {
    return (
        <div className="pagination">
            <span>Total rows: {data.length}</span>
            <div>
                {currentPage > 1 && (
                    <button onClick={onFirstPage}>
                        {'First'}
                    </button>
                )}

                <button 
                    onClick={onPreviousPage}
                    disabled={currentPage === 1}
                >
                    {'Prev'}
                </button>

                {currentPage > 3 && totalPages > 5 && (
                    <button onClick={() => onHandleCurrentPage(currentPage - 2)}>
                        ...
                    </button>
                )}

                {currentPage > 1 && (
                    <button onClick={() => onHandleCurrentPage(currentPage - 1)}>
                        {currentPage - 1}
                    </button>
                )}

                <button className="active">{currentPage}</button>

                {currentPage < totalPages && (
                    <button onClick={() => onHandleCurrentPage(currentPage + 1)}>
                        {currentPage + 1}
                    </button>
                )}

                {currentPage < totalPages - 1 && (
                    <button onClick={() => onHandleCurrentPage(currentPage + 2)}>
                        ...
                    </button>
                )}

                <button 
                    onClick={onNextPage}
                    disabled={currentPage === totalPages}
                >
                    {'Next'}
                </button>

                {currentPage < totalPages && (
                    <button onClick={onLastPage}>
                        {'Last'}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Pagination
