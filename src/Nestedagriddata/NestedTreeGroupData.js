

export const  columnDefsData=[
     
    {headerName:"Item Type", field: "itemType",width:200  },
   {headerName:"Test Name",field:"testName"},
   {headerName:"Source",field:"source"},
   {headerName:"Test Category",field:"testCategory"},
   {headerName:"Pass/Fail",field:"pass_fail",cellRenderer: (params) => {
    if (params.value === 'Pass') {
      return <span><i className="bi bi-check-circle bg-success text-light p-1 rounded-1"></i>  {params.value}</span>;
    } else if (params.value === 'Fail') {
      return <span><i className="bi bi-x-circle bg-danger text-light p-1 rounded-1"></i>  {params.value}</span>;
    } else {
      return '';
    }
  },},
   {headerName:"Weight",field:"weight"},
   {headerName:"Test Score",field:"testScore"},
   {headerName:"Item Score(Weighted)",field:"itemScore", cellRenderer: (params) => {
      if(params.value){

        return params.value + "%";
      }else{
        return ""
      }
    },}
    
  ]
  export const groupDataTree=[ 
    
    {
        orgHierarchy:['Panther Lake P Platform Segment'],
        itemType:"Platform Segment",
       testName:"",
       source:"",
       testCategory:"",
       pass_fail:"",
       itemScore:83,
       id:10047678,

    },
    {
        orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Premium Notebook Clamshell Convertible' ],
        itemType:"Platform Variant",
       testName:"",
       source:"",
       testCategory:"",
       pass_fail:"",
       itemScore:87,
       id:10047641,

    },
    {
        orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Premium Notebook Clamshell Convertible','Panther Lake Windows System Software'],
        itemType:"Product Variant",
       testName:'Test details',
       source:"",
       testCategory:"",
       pass_fail:"",
       itemScore:92,
       id:10047642,

    },
    {
      orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Premium Notebook Clamshell Convertible','a'],
      itemType:"",
     testName:'Responsible Engineer(Defined & Active)',
     source:"SPEED",
     testCategory:"Ownership",
     pass_fail:"Pass",
     itemScore:100,
     weight:1,
     testScore:1,
     id:'',
     toHide:true

  },
  {
    orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Premium Notebook Clamshell Convertible','b',],
    itemType:"",
   testName:'Active Item Last Modified < 6 Months',
   source:"SPEED",
   testCategory:"Ownership",
   pass_fail:"Fail",
   itemScore:100,
   weight:1,
   testScore:0,
   id:'',
   toHide:true
},
{
  orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Premium Notebook Clamshell Convertible','c',],
  itemType:"",
 testName:'Responsible Engineer Division (Defined & Active)',
 source:"SPEED",
 testCategory:"Ownership",
 pass_fail:"Pass",
 itemScore:100,
 weight:1,
 testScore:1,
 id:'',
 toHide:true
},
{
  orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Premium Notebook Clamshell Convertible','d',],
  itemType:"",
 testName:'Variant to Component Mapping (Defined)',
 source:"SPEED",
 testCategory:"Ownership",
 pass_fail:"Fail",
 itemScore:100,
 weight:1,
 testScore:0,
 id:'',
 toHide:true
},
    // {
    //     orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Premium Notebook Clamshell Convertible','Panther Lake Windows System Software','Graphics Windows Driver'],
    //     itemType:"Product Variant",
    //    testName:'Test details',
    //    source:"",
    //    testCategory:"",
    //    pass_fail:"",
    //    itemScore:100,
    //    id:'',

    // },
    // {
    //     orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Premium Notebook Clamshell Convertible','Panther Lake Windows System Software','Graphics Windows Driver','Client GFX FW Image for Alchemist'],
    //     itemType:"Product Variant",
    //    testName:'Test details',
    //    source:"",
    //    testCategory:"",
    //    pass_fail:"",
    //    itemScore:92,
    //    id:'',

    // },
   
    // {
    //     orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Premium Notebook Clamshell Convertible','Panther Lake Windows System Software','Graphics Windows Driver','Client GFX FW Image for Alchemist','Client GFX FW Image for Battlemage'],
    //     itemType:"Product Variant",
    //    testName:'Test details',
    //    source:"",
    //    testCategory:"",
    //    pass_fail:"",
    //    itemScore:100,
    //    id:'',

    // },
    // {
    //     orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Premium Notebook Clamshell Convertible','Panther Lake Windows System Software','Graphics Windows Driver','Client GFX FW Image for Alchemist','Client GFX FW image for Celestial'],
    //     itemType:"Product Variant",
    //    testName:'Test details',
    //    source:"",
    //    testCategory:"",
    //    pass_fail:"",
    //    itemScore:92,
    //    id:'',

    // },
    // {
    //     orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Premium Notebook Clamshell Convertible','Panther Lake Windows System Software','Graphics Windows Driver','Client GFX FW Image for Alchemist','Client GFX FW image for Celestial','Client GFX FW image for Celestial'],
    //        itemType:"Product Variant",
    //       testName:'Test details',
    //       source:"",
    //       testCategory:"",
    //       pass_fail:"",
    //       itemScore:87,
    //       id:'',
   
    //    },
      //  {
      //   orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Premium Notebook Clamshell Convertible','Panther Lake Windows System Software','Graphics Windows Driver','Client GFX FW Image for Alchemist','Client GFX FW image for Celestial','Client GFX FW image for Celestial','IPX 3rd Party IP Component'],
      //      itemType:"Component",
      //     testName:'Test details',
      //     source:"",
      //     testCategory:"",
      //     pass_fail:"",
      //     itemScore:91,
      //     id:'',
   
      //  },
    //    {
    //     orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Premium Notebook Clamshell Convertible','Panther Lake P Linux System Software' ],
    //     itemType:"Platform Variant",
    //    testName:"Test details",
    //    source:"",
    //    testCategory:"",
    //    pass_fail:"",
    //    itemScore:87,
    //    id:'',

    // },
    {
        orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Hybrid FPGA' ],
        itemType:"Platform Variant",
       testName:"",
       source:"",
       testCategory:"",
       pass_fail:"",
       itemScore:87,
       id:10053432,

    },
    {
        orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Hybrid FPGA','Panther Lake P Hybrid FPGA' ],
        itemType:"Platform Variant",
       testName:"Test details",
       source:"",
       testCategory:"",
       pass_fail:"",
       itemScore:87,
       id:10053432,

    },
    {
        orgHierarchy:['Panther Lake P Platform Segment','Panther Lake P Previous Gen' ],
        itemType:"Platform Variant",
       testName:"",
       source:"",
       testCategory:"",
       pass_fail:"",
       itemScore:87,
       id:10053433,

    },
 
   
]