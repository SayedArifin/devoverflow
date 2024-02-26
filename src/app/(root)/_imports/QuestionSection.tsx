import NoResult from '@/components/shared/NoResult';
import QuestionCard from '@/components/shared/QuestionCard';
import React from 'react'

const QuestionSection = () => {
    const questions = [
        {
            _id: "1",
            title: "Cascading Deletes in SQLAlchemy?",
            tags: [
                { _id: "1", name: "python" },
                { _id: "2", name: "sql" },
            ],
            author: { _id: "1", name: "John Doe", picture: "john.jpg" },
            upvotes: 101506,
            views: 1000007,
            answers: [],
            createdAt: new Date("2022-12-01T12:00:00.000Z"),
        },
        {
            _id: "2",
            title: "How to center a div?",
            tags: [
                { _id: "3", name: "html" },
                { _id: "4", name: "css" },
            ],
            author: { _id: "2", name: "Jane Smith", picture: "jane.jpg" },
            upvotes: 35001,
            views: 150000002,
            answers: [],
            createdAt: new Date("2023-09-02T10:30:00.000Z"),
        },
    ];
    return (
        <div className="mt-10 flex w-full flex-col gap-6">
            {questions.length > 0 ? (
                questions.map((question) => (
                    <QuestionCard
                        key={question._id}
                        _id={question._id}
                        title={question.title}
                        tags={question.tags}
                        author={question.author}
                        answers={question.answers}
                        upvotes={question.upvotes}
                        views={question.views}
                        createdAt={question.createdAt}
                    />

                ))
            ) : (
                <NoResult
                    title="There's no question to show"
                    description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
                    link="/ask-question"
                    linkTitle="Ask a question"
                />
            )}
        </div>
    )
}

export default QuestionSection