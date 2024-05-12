import React from 'react'
export default function Pagination({ paginationValue, prevClick, nextClick }) {
    return (
        <>

            <div className="inline-flex items-center justify-center rounded bg-blue-600 py-1 text-white">
                <a href="#" className="inline-flex size-8 items-center justify-center rtl:rotate-180">
                    <span className="sr-only">Prev Page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>

                <span className="h-4 w-px bg-white/25" aria-hidden="true"></span>

                <div>
                    <label for="PaginationPage" className="sr-only">Page</label>

                    <input
                        type="number"
                        className="h-8 w-12 rounded border-none bg-transparent p-0 text-center text-xs font-medium [-moz-appearance:_textfield] focus:outline-none focus:ring-inset focus:ring-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        min="1"
                        value="1"
                        id="PaginationPage"
                    />
                </div>

                <span className="h-4 w-px bg-white/25"></span>

                <a href="#" className="inline-flex size-8 items-center justify-center rtl:rotate-180">
                    <span className="sr-only">Next Page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
            </div>
        </>
    )
}