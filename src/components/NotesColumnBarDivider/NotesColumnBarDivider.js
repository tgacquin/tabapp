import React from "react";
import '../NotesColumnBarDivider/NotesColumnBarDivider.css';

function NotesColumnBarDivider({  }) {

    // Function to render a single pipe
    const renderPipe = () => {
        return (
            <div>|</div>
        );
    };

    return (
        <div className="divide">
            {Array(6).fill(null).map((_, index) => (
                <React.Fragment key={index}>
                    {renderPipe()}
                </React.Fragment>
            ))}
        </div>
    );
}

export default NotesColumnBarDivider;
