import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import "./CodeEditor.css"; 

function CodeEditor() {
    const [code, setCode] = useState("// Type your JavaScript code...");
    const [aiFeedback, setAiFeedback] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const formatResponse = (responseText) => {
        // Remove text inside <think>...</think>
        let cleanedText = responseText.replace(/<think>[\s\S]*?<\/think>/g, "");

        // Replace **bold text** with HTML <strong> tags
        cleanedText = cleanedText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

        return cleanedText;
    };

    const fetchAISuggestions = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.post("https://ai-code-review-backend-csl7.onrender.com/analyze", { code });
            const formattedText = formatResponse(response.data.ai_feedback);
            setAiFeedback(formattedText);
        } catch (error) {
            setError("Error fetching suggestions. Please try again.");
            setAiFeedback("");
        }
        setLoading(false);
    };

    return (
        <div className="code-editor-container">
            <h1>AI-Based Code Review</h1>
            <div className="editor-container">
                <Editor
                    height="400px"
                    defaultLanguage="javascript"
                    value={code}
                    onChange={(value) => setCode(value || "")}
                    theme="vs-dark"
                    options={{ fontSize: 14, automaticLayout: true }}
                />
            </div>
            <button 
                onClick={fetchAISuggestions} 
                className="fetch-button"
                disabled={loading}
            >
                {loading ? (
                    <>
                        <div className="spinner"></div> Loading...
                    </>
                ) : "Get AI Suggestions"}
            </button>
            {error && <div className="error-message">{error}</div>}

            <h2>AI Suggestions</h2>
            <div className="suggestion-card">
                <pre className="ai-feedback" dangerouslySetInnerHTML={{ __html: aiFeedback }}></pre>
            </div>
        </div>
    );
}

export default CodeEditor;
