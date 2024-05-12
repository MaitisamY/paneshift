import '../styles/paneshift-table.css'

import { FaTrashAlt, FaPenAlt } from 'react-icons/fa'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'

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
            <thead>
                <tr>
                <th>
                    <div style={{ cursor: 'pointer'}}>
                        {
                            selectedItems.length > 0 ? (
                                <MdCheckBox 
                                    size={20} 
                                    style={{ cursor: 'pointer'}}
                                    onClick={() => onSetSelectedItems([])} 
                                />
                            ) : (
                                <MdCheckBoxOutlineBlank 
                                    size={20} 
                                    onClick={() => onSetSelectedItems(data.map(item => item.id))} 
                                />
                            )
                        }
                    </div>
                </th>
                {
                    Object.keys(data[0]).map((key, index) => (
                        <th key={index}>
                            {key === 'id' ? '#' : key.charAt(0).toUpperCase() + key.slice(1)}
                        </th>
                    ))
                }
                <th>Actions</th>
                </tr>
            </thead>
            {
                !searchTerm ? (
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div>
                                    {
                                        selectedItems.includes(item.id) ? (
                                            <MdCheckBox 
                                                size={20} 
                                                style={{ cursor: 'pointer'}}
                                                onClick={() => onHandleSelection(item.id)} 
                                            />
                                        ) : (
                                            <MdCheckBoxOutlineBlank 
                                                size={20} 
                                                style={{ cursor: 'pointer'}}
                                                onClick={() => onHandleSelection(item.id)} 
                                            />
                                        )
                                    }
                                </div>
                            </td>
                            <td>{data.indexOf(item) + 1}</td>
                            <td>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</td>
                            <td>{item.age}</td>
                            <td>{item.the_dream}</td>
                            <td>{item.remark}</td>
                            <td>
                                <button
                                    className="edit"
                                    title={`Edit item: ${item.name}`}
                                >
                                    <FaPenAlt />
                                </button>
                                <button 
                                    className="danger" 
                                    title={`Delete item: ${item.name}`}
                                >
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                ) : filteredItems === 0 ? (
                    <tbody>
                        <tr>
                            <td colSpan={5}>No results found</td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody>
                        {filteredItems.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div style={{ cursor: 'pointer'}}>
                                        {
                                            selectedItems.includes(item.id) ? (
                                                <MdCheckBox 
                                                    size={20} 
                                                    style={{ cursor: 'pointer'}}
                                                    onClick={() => onHandleSelection(item.id)} 
                                                />
                                            ) : (
                                                <MdCheckBoxOutlineBlank 
                                                    size={20} 
                                                    style={{ cursor: 'pointer'}}
                                                    onClick={() => onHandleSelection(item.id)} 
                                                />
                                            )
                                        }
                                    </div>
                                </td>
                                <td>{data.indexOf(item) + 1}</td>
                                <td>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</td>
                                <td>{item.the_dream}</td>
                                <td>{item.age}</td>
                                <td>{item.remark}</td>
                                <td>
                                    <button
                                        className="edit"
                                        title={`Edit item: ${item.name}`}
                                    >
                                        <FaPenAlt />
                                    </button>
                                    <button 
                                        className="danger" 
                                        title={`Delete itemegory: ${item.name}`}
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )
            }
        </table>
    )
}

export default Table