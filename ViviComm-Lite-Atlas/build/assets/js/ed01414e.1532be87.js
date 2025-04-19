"use strict";(self.webpackChunkvivi_comm_lite_atlas=self.webpackChunkvivi_comm_lite_atlas||[]).push([[177],{7504:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"0.0.1-SNAPSHOT/key-components/federated-login/uml/index","title":"Federated Login UML Diagrams","description":"---","source":"@site/versioned_docs/0.0.1-SNAPSHOT/key-components/federated-login/uml/index.md","sourceDirName":"0.0.1-SNAPSHOT/key-components/federated-login/uml","slug":"/0.0.1-SNAPSHOT/key-components/federated-login/uml/","permalink":"/versioned_docs/0.0.1-SNAPSHOT/key-components/federated-login/uml/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Federated Login Extra Documents","permalink":"/versioned_docs/0.0.1-SNAPSHOT/key-components/federated-login/extras/"},"next":{"title":"Security","permalink":"/versioned_docs/0.0.1-SNAPSHOT/security"}}');var t=a(4848),d=a(8453);const i={},s="Federated Login UML Diagrams",c={},o=[{value:"\u25b6\ufe0f Sequence Diagram",id:"\ufe0f-sequence-diagram",level:2},{value:"\ud83e\udde9 Use Case Diagram (Restored)",id:"-use-case-diagram-restored",level:2},{value:"\ud83d\udd04 State Diagram (Restored)",id:"-state-diagram-restored",level:2},{value:"\ud83d\udce1 Data Flow Diagram (Corrected + Labeled)",id:"-data-flow-diagram-corrected--labeled",level:2}];function l(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"federated-login-uml-diagrams",children:"Federated Login UML Diagrams"})}),"\n",(0,t.jsx)(r.h1,{id:"federatedlogin--corrected-mermaid-diagrams",children:"FederatedLogin \u2013 Corrected Mermaid Diagrams"}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"\ufe0f-sequence-diagram",children:"\u25b6\ufe0f Sequence Diagram"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-mermaid",children:"sequenceDiagram\r\n    actor EndUser as End User\r\n    participant FL as FederatedLogin\r\n    participant OP as OAuth Provider\r\n    participant ULS as UserLinkService\r\n\r\n    EndUser->>FL: Login Click\r\n    FL->>OP: Redirect to Auth\r\n    OP--\x3e>FL: Auth + Code\r\n    FL->>OP: Exchange Token\r\n    OP--\x3e>FL: Token + Profile\r\n    FL->>ULS: Link User\r\n    ULS--\x3e>FL: User ID\r\n    FL->>EndUser: Create Session\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"-use-case-diagram-restored",children:"\ud83e\udde9 Use Case Diagram (Restored)"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-mermaid",children:"graph TD\r\n    A[OAuth2 Handler] --\x3e UC1[Match by External ID]\r\n    A --\x3e UC2[Fallback Match by Verified Email]\r\n    A --\x3e UC3[Detect Conflicts]\r\n    A --\x3e UC4[Create New User (Verified Only)]\r\n    A --\x3e UC5[Log Link Outcome]\r\n    Admin --\x3e UC3\r\n    Admin --\x3e UC5\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"-state-diagram-restored",children:"\ud83d\udd04 State Diagram (Restored)"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-mermaid",children:"stateDiagram-v2\r\n    [*] --\x3e TryExternalIdMatch\r\n    TryExternalIdMatch --\x3e MatchFound : Match exists\r\n    TryExternalIdMatch --\x3e CheckFallback : No match\r\n    MatchFound --\x3e AuditSuccess\r\n    CheckFallback --\x3e ValidFallback : Fallback enabled + verified email\r\n    CheckFallback --\x3e CheckCreateAllowed : No fallback match\r\n    ValidFallback --\x3e AuditSuccess\r\n    CheckCreateAllowed --\x3e CreateUser : Creation allowed\r\n    CheckCreateAllowed --\x3e Reject : Not allowed\r\n    CreateUser --\x3e AuditSuccess\r\n    Reject --\x3e AuditFailure\r\n    AuditSuccess --\x3e [*]\r\n    AuditFailure --\x3e [*]\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"-data-flow-diagram-corrected--labeled",children:"\ud83d\udce1 Data Flow Diagram (Corrected + Labeled)"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-mermaid",children:"graph LR\r\n    EU[End User] --\x3e|Login Request| FL[FederatedLogin]\r\n    FL --\x3e|Redirect & Token| OP[OAuth2 Provider]\r\n    OP --\x3e|Auth Code + Token| FL\r\n    FL --\x3e|Profile| ULS[UserLinkService]\r\n    ULS --\x3e|Lookup/Create| UDB[User Database]\r\n    FL --\x3e|Session Created| EU\n"})})]})}function m(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,r,a)=>{a.d(r,{R:()=>i,x:()=>s});var n=a(6540);const t={},d=n.createContext(t);function i(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);