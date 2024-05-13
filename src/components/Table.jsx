// Import necessary modules and styles
import '../styles/paneshift-table.css';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

// Table component
function Table({ 
    data,
    searchTerm,
    currentItems,
    filteredItems,
    selectedItems,
    onSetSelectedItems,
    onHandleSelection,
 }) {
    return (
        <table>
            {/* Table header */}
            <thead>
                {
                    filteredItems.length === 0 ? 
                        <tr>
                            <th className="zero-results" colSpan={Object.keys(data[0]).length + 1}>
                                No results found
                            </th>
                        </tr> 
                    :
                    <tr>
                        {/* Checkbox for selecting all items */}
                        <th>
                            <div>
                                {selectedItems.length > 0 ? (
                                    <span>
                                        <MdCheckBox 
                                            className="text-green"
                                            size={20} 
                                            onClick={() => onSetSelectedItems([])} 
                                        />
                                    </span>
                                ) : (
                                    <span>
                                        <MdCheckBoxOutlineBlank 
                                            size={20} 
                                            onClick={() => onSetSelectedItems(data.map(item => item.id))} 
                                        />
                                    </span>
                                )}
                            </div>
                        </th>
                        {/* Table headers for each data field */}
                        {Object.keys(data[0]).map((key, index) => (
                            <th key={index}>
                                {/* Convert snake_case to title case */}
                                {key === 'id' ? '#' : 
                                    key.includes('_') ? 
                                        key.split('_').map((word, i) => 
                                            i === 0 ? 
                                                word.charAt(0).toUpperCase() + word.slice(1) :
                                                word.charAt(0).toUpperCase() + word.slice(1)
                                        ).join(' ') : 
                                        key.charAt(0).toUpperCase() + key.slice(1)
                                }
                            </th>
                        ))}
                        {/* Actions column */}
                        <th>Actions</th>
                    </tr>
                }
            </thead>
            {/* Table body */}
            {!searchTerm ? ( // Render table body without search filter
                <tbody>
                    {/* Render each item */}
                    {currentItems.map((item, index) => (
                        <tr className={selectedItems.includes(item.id) ? 'selected' : ''} key={index}>
                            {/* Checkbox for selecting individual items */}
                            <td>
                                <div>
                                    {selectedItems.includes(item.id) ? (
                                        <span>
                                            <MdCheckBox
                                                className="text-green" 
                                                size={20} 
                                                onClick={() => onHandleSelection(item.id)} 
                                            />
                                        </span>
                                    ) : (
                                        <span>
                                            <MdCheckBoxOutlineBlank 
                                                size={20} 
                                                onClick={() => onHandleSelection(item.id)} 
                                            />
                                        </span>
                                    )}
                                </div>
                            </td>
                            {/* Render data fields */}
                            <td>{data.indexOf(item) + 1}</td>
                            <td>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</td>
                            <td>{item.age}</td>
                            <td>{item.the_dream}</td>
                            <td>{item.remark}</td>
                            {/* Action buttons */}
                            <td>
                                <div className="button-group">
                                    <button
                                        className="edit"
                                        title={`Edit item: ${item.name}`}
                                    >
                                        <FaEdit />
                                    </button>
                                    <button 
                                        className="danger" 
                                        title={`Delete item: ${item.name}`}
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            ) : ( // Render table body with search filter
                <tbody>
                    {/* Render each filtered item */}
                    {filteredItems.map((item, index) => (
                        <tr className={selectedItems.includes(item.id) ? 'selected' : ''} key={index}>
                            {/* Checkbox for selecting individual items */}
                            <td>
                                <div style={{ cursor: 'pointer'}}>
                                    {selectedItems.includes(item.id) ? (
                                        <span>
                                            <MdCheckBox 
                                                className="text-green"
                                                size={20} 
                                                onClick={() => onHandleSelection(item.id)} 
                                            />
                                        </span>
                                    ) : (
                                        <span>
                                            <MdCheckBoxOutlineBlank 
                                                size={20} 
                                                onClick={() => onHandleSelection(item.id)} 
                                            />
                                        </span>
                                    )}
                                </div>
                            </td>
                            {/* Render data fields */}
                            <td>{data.indexOf(item) + 1}</td>
                            <td>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</td>
                            <td>{item.the_dream}</td>
                            <td>{item.age}</td>
                            <td>{item.remark}</td>
                            {/* Action buttons */}
                            <td>
                                <div className="button-group">
                                    <button
                                        className="edit"
                                        title={`Edit item: ${item.name}`}
                                    >
                                        <FaEdit />
                                    </button>
                                    <button 
                                        className="danger" 
                                        title={`Delete item: ${item.name}`}
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            )}
        </table>
    )
}

export default Table; // Export Table component
