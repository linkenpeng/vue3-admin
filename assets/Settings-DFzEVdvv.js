import{_ as m,e as _,w as u,r as o,o as d,a as s}from"./index-DnUUWmlW.js";const b={data(){return{tableData:[{score:86,name:"张三",student_number:"100000001"},{score:72,name:"李四",student_number:"100000002"},{score:98,name:"王五",student_number:"100000003"},{score:45,name:"赵六",student_number:"100000004"}]}},methods:{tableRowClassName({row:n}){let e="";const t=n.score;return t>=90?e="excellent":t>=80?e="good":t<60&&(e="flunk"),e}}};function p(n,e,t,f,l,r){const a=o("el-table-column"),c=o("el-table");return d(),_(c,{data:l.tableData,"row-class-name":r.tableRowClassName,style:{width:"100%"}},{default:u(()=>[s(a,{prop:"student_number",label:"学号"}),s(a,{prop:"name",label:"姓名",width:"180"}),s(a,{prop:"score",label:"分数",width:"180"})]),_:1},8,["data","row-class-name"])}const w=m(b,[["render",p]]);export{w as default};