/*
    usePagination hook
    I handle pagination functionalities in this hook
    I do not use comments to describe state variables and functions because 
    they are named as easy as possible, so that you can easily understand 
    what they are for, what they do and how they work.
    We also handle the toast notifications. 

    @param(prop) {data} data - The array of data to be paginated.

    @Author: Muhammad Aitisam Yaseen
*/

import { useState } from 'react'
import { toast } from 'react-toastify'

export const usePagination = ({ data: data }) => {
    
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(25)
    const [selectedItems, setSelectedItems] = useState([])

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const totalPages = Math.ceil(data.length / itemsPerPage)

    const handleCurrentPage = (page) => {
        setCurrentPage(page)
    }

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const lastPage = () => {
        setCurrentPage(totalPages)
    }

    const firstPage = () => {
        setCurrentPage(1)
    }

    const handleItemsPerPage = (e) => {
        setItemsPerPage(e.target.value)

        toast.success('Items per page updated to: ' + e.target.value, {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        })
    }

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSelection = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id))
        } else {
            setSelectedItems([...selectedItems, id])
        }
    }
    
    return {
        searchTerm,
        currentPage,
        indexOfFirstItem,
        indexOfLastItem,
        totalPages,
        selectedItems,
        setSelectedItems,
        handleSelection,
        handleCurrentPage,
        setCurrentPage,
        previousPage,
        nextPage,
        lastPage,
        firstPage,
        handleItemsPerPage,
        handleSearchTerm
    }
}