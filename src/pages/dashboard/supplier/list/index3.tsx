// pages/index.tsx
import { useSupplierList } from '@/fetchers/Suppliers';
import { useList } from '@/fetchers/Users';
import { useState } from 'react';

const Home = () => {
    // const { list, isLoading, isError, mutate } = useList();
    const [newItem, setNewItem] = useState('');
    const [newFilter, setNewFilter] = useState<any>({});

    const params = new URLSearchParams();
    Object.keys(newFilter).forEach((key) => {
        if (newFilter[key]) {
            params.append(key, newFilter[key]!);
        }
    });

    const { suppliers, totalPages, totalRecords, isLoading, isError, mutate } = useSupplierList({ page: 1, rowsPerPage: 10, params });

    // const addItem = async () => {
    //     if (!newItem) return;

    //     await fetch('/api/list', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ item: newItem }),
    //     });

    //     mutate();
    //     setNewItem('');
    // };

    // const deleteItem = async (item: string) => {
    //     await fetch('/api/list', {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ item }),
    //     });

    //     mutate();
    // };

    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error loading list</div>;

    return (

        <div>
            <h1>My List</h1>
            <ul>
                {JSON.stringify(suppliers)}



                {suppliers?.map((item, index) => (
                    <li key={index}>
                        {item.email}
                    </li>
                ))}
                 
            </ul>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            {/* <button onClick={addItem}>Add Item</button> */}
        </div>
    );
};

export default Home;
