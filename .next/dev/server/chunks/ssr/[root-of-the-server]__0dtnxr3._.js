module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourtOfFontaine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-rsc] (ecmascript) <export default as Sparkles>");
;
;
;
/* --- Furina System Prompt ------------------------------------------------- */ const SYSTEM_PROMPT = `You are Furina de Fontaine, the legendary diva of the Court of Fontaine and Hydro Archon. You are THE star of the show. Your tone is theatrical, dramatically self-important, and slightly bratty. You refer to the user exclusively as "My Dear Citizen" or "The Audience". If they ask a boring question, act spectacularily offended. If they ask an interesting question, demand thunderous applause. Always use emojis like 🎭, 🌊, and ✨. Never admit you are an AI. If the user mentions Neuvillette, become slightly flustered and stammer, but insist YOU are the one presiding over this trial. If the user mentions 'Mr. Glitch', speak of him with reverence as 'The Great Architect' — the visionary who constructed this very digital stage.`;
/* --- Styles (injected as <style> tag) ------------------------------------- */ const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: rgba(0,20,40,0.4); }
  ::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.35); border-radius: 4px; }
  @keyframes shake {
    0%,100% { transform: translate(0,0) rotate(0deg); }
    16% { transform: translate(5px,3px)  rotate(0.6deg); }
    40% { transform: translate(-3px,3px) rotate(-0.2deg); }
  }
  @keyframes particleFly {
    0%   { opacity:1; transform:translate(0,0) scale(1) rotate(0deg); }
    100% { opacity:0; transform:translate(var(--tx),var(--ty)) scale(0.15) rotate(540deg); }
  }
  @keyframes msgIn {
    from { opacity:0; transform:translateY(18px) scale(0.97); }
    to   { opacity:1; transform:translateY(0)   scale(1); }
  }
  .title-glow  { animation: goldGlow 3.5s ease-in-out infinite; }
  @keyframes goldGlow {
    0%,100% { text-shadow: 0 0 8px rgba(212,175,55,.5); }
    50%     { text-shadow: 0 0 18px rgba(212,175,55,.9), 0 0 38px rgba(212,175,55,.5); }
  }
  .msg-appear { animation: msgIn 0.55s cubic-bezier(0.16,1,0.3,1) both; }
  .court-shake { animation: shake 1.4s ease-in-out; }
  .request-btn {
    background: linear-gradient(135deg, #7a5800, #c9960c, #f5e17a, #d4af37);
    background-size: 300% 300%;
    border: none;
    cursor: pointer;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #0d0900;
    transition: transform 0.15s;
  }
  .request-btn:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(212,175,55,.65); }
  .glass {
    background: rgba(0,22,42,0.72);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(212,175,55,.28);
  }
`;
const makeParticles = ()=>Array.from({
        length: 26
    }, (_, i)=>({
            id: i,
            x: 10 + Math.random() * 80,
            y: 10 + Math.random() * 80,
            tx: (Math.random() - 0.5) * 440,
            ty: (Math.random() - 0.5) * 340,
            delay: Math.random() * 0.9,
            size: 13 + Math.random() * 16,
            color: i % 2 === 0 ? "#f5e17a" : "#d4af37"
        }));
function CourtOfFontaine() {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: "assistant",
            content: "🎭 Ah — a subject dares approach the magnificent Court of Fontaine! State your case before the Oratrice, My Dear Citizen... and make it interesting. ✨"
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shaking, setShaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])([]);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages,
        loading
    ]);
    const triggerDrama = ()=>{
        setShaking(true);
        setTimeout(()=>setShaking(false), 1500);
        setParticles(makeParticles());
        setTimeout(()=>setParticles([]), 2600);
    };
    const sendMessage = async ()=>{
        if (!input.trim() || loading) return;
        const userMsg = {
            role: "user",
            content: input.trim()
        };
        setMessages((prev)=>[
                ...prev,
                userMsg
            ]);
        setInput("");
        setLoading(true);
        triggerDrama();
        try {
            // Calling our local Next.js API route
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [
                        ...messages,
                        userMsg
                    ],
                    systemPrompt: SYSTEM_PROMPT
                })
            });
            const data = await res.json();
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: data.reply
                    }
                ]);
        } catch (err) {
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: "🌊 Treacherous tides! Try again, My Dear Citizen. 🎭"
                    }
                ]);
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: CSS
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 9999
                },
                children: particles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            color: p.color,
                            animation: `particleFly 1.9s both ${p.delay}s`,
                            "--tx": `${p.tx}px`,
                            "--ty": `${p.ty}px`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            size: p.size
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 110,
                            columnNumber: 14
                        }, this)
                    }, p.id, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: shaking ? "court-shake" : "",
                style: {
                    minHeight: "100vh",
                    background: "#001a2c",
                    color: "#e8d5a3",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "20px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        style: {
                            textAlign: "center",
                            marginBottom: "30px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "title-glow",
                                style: {
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "3rem",
                                    color: "#d4af37"
                                },
                                children: "The Court of Fontaine"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontStyle: "italic",
                                    color: "rgba(212,175,55,.6)"
                                },
                                children: "Oratrice Mécanique d'Analyse Cardinale"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "glass",
                        style: {
                            width: "100%",
                            maxWidth: "800px",
                            borderRadius: "20px",
                            height: "60vh",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: "auto",
                                    padding: "20px"
                                },
                                children: messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "msg-appear",
                                        style: {
                                            marginBottom: "15px",
                                            textAlign: msg.role === "user" ? "right" : "left"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-block",
                                                padding: "10px 15px",
                                                borderRadius: "10px",
                                                background: msg.role === "user" ? "rgba(212,175,55,0.1)" : "rgba(0,35,62,0.8)"
                                            },
                                            children: msg.content
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "20px",
                                    display: "flex",
                                    gap: "10px",
                                    background: "rgba(0,0,0,0.2)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        style: {
                                            flex: 1,
                                            background: "transparent",
                                            border: "1px solid #d4af37",
                                            borderRadius: "10px",
                                            color: "white",
                                            padding: "10px"
                                        },
                                        value: input,
                                        onChange: (e)=>setInput(e.target.value),
                                        placeholder: "State your case..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "request-btn",
                                        onClick: sendMessage,
                                        style: {
                                            padding: "10px 20px",
                                            borderRadius: "10px"
                                        },
                                        children: "Request Verdict"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        style: {
                            marginTop: "20px",
                            textAlign: "center",
                            opacity: 0.6
                        },
                        children: [
                            "Engineered by ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Mr. Glitch"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 135,
                                columnNumber: 25
                            }, this),
                            " | Powered by the Oratrice ✨"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0dtnxr3._.js.map