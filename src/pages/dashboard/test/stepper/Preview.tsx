import React, { Dispatch, SetStateAction } from 'react';
import { useContext, useState } from 'react';
import { FormContext } from './FormContext';
import Step1 from './Step1';
import { useRouter } from 'next/router';

interface SupplierReviewProps {
    prevStep: () => void;
    setShowReview: Dispatch<SetStateAction<boolean>>;
}

// const Preview: = ({ prevStep }: { prevStep: () => void, formData: any }) => {
const Preview: React.FC<SupplierReviewProps> = ({ prevStep, setShowReview }) => {
    const { formData } = useContext(FormContext);
    // const router = useRouter();
    const [currentPage, setCurrentPage] = useState<'Step1' | 'Preview'>('Step1');

    const handleBack = () => {
        setShowReview(false);
    }


    if (!formData) {
        return null; // Return null if formData is not available
    }

    return (
        <div>
            <h2>Preview</h2>
            <div>
                <p>Name: {formData.name}</p>
                <p>Address: {formData.address}</p>
                <p>Sex: {formData.sex === "male" ? "Male" : "Female"}</p>
                <p>Favorite Color: {formData.favoriteColor}</p>
                <p>Hobbies: {formData.hobbies?.join(', ')}</p>
                <p>Languages: {formData.languages?.join(', ')}</p>
                <p>Items:</p>
                <ul>
                    <li>Apples: {formData.items?.apples}</li>
                    <li>Oranges: {formData.items?.oranges}</li>
                    <li>Bananas: {formData.items?.bananas}</li>
                </ul>
            </div>
            <button onClick={prevStep}>Back</button>
            <button onClick={handleBack}>Back2</button>
            <button onClick={() => alert('Form Submitted!')}>Submit</button>
        </div>
    );
};

export default Preview;
