import Question from '@/components/form/Question'
import React from 'react'

const page = () => {
    return (
        <div>
            <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
            <div className="mt-9">
                <Question type='Post' />
            </div>
        </div>
    )
}

export default page