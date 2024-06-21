export const rowData12 = [
  {
    orgHierarchy: ["Panther Lake P Platform Segment"],
    itemType: "Platform Segment",
    test: "",
    source: "",
    testCategory: "",
    pass_fail: "",
    itemScore: 92,
    id: 10047678,
    testName: "",
    weight: null,
    testScore: null,
  },
  {
    orgHierarchy: [
      "Panther Lake P Platform Segment",
      "Panther Lake Windows System Software",
    ],
    itemType: "Product Variant",
    test: "Test Details",
    source: "",
    testCategory: "",
    pass_fail: "",
    itemScore: 83,
    id: 10047678,
    testName: "",
    weight: null,
    testScore: null,
  },
  {
    orgHierarchy: [
      "Panther Lake P Platform Segment",
      "Panther Lake Windows System Software",
      "",
    ],
    itemType: "Product Variant",
    test: ["Test Details", "Responsible Engineer Division (Defined & Active)"],
    source: "SPEED",
    testCategory: "Ownership",
    pass_fail: "Pass",
    itemScore: 100,
    id: 10047678,
    testName: "Responsible Engineer(Defined & Active)",
    weight: 1,
    testScore: 1,
  },
  // {
  //     orgHierarchy:['Panther Lake P Platform Segment','Panther Lake Windows System Software'],
  //     itemType:"Product Variant",
  //    test:"test1",
  //    source:"SPEED",
  //    testCategory:"Ownership",
  //    pass_fail:"Fail",
  //    itemScore:88,
  //    id:10047678,
  // testName:"Active Item Last Modified < 6 Months",
  // weight:1,
  // testScore:0
  // },
  // {
  //     orgHierarchy:['Panther Lake P Platform Segment','Panther Lake Windows System Software'],
  //     itemType:"Product Variant",
  //    test:"test1",
  //    source:"SPEED",
  //    testCategory:"Ownership",
  //    pass_fail:"Fail",
  //    itemScore:76,
  //    id:10047678,
  // testName:"Responsible Engineer Division (Defined & Active)",
  // weight:1,
  // testScore:0
  // },
  // {
  //     orgHierarchy:['Panther Lake P Platform Segment','Panther Lake Windows System Software'],
  //     itemType:"Product Variant",
  //    test:"test1",
  //    source:"SPEED",
  //    testCategory:"Traceability",
  //    pass_fail:"Pass",
  //    itemScore:97,
  //    id:10047678,
  // testName:"Variant to Component Mapping (Defined)",
  // weight:1,
  // testScore:1
  // },
];

export const columnDefs12 = [
  // {headerName:"NAME(ID)",field:"orgHierarchy", width:300,},
  { headerName: "Item Type", field: "itemType" },
  {
    headerName: "Test",
    valueGetter: (params) => {
      return `Test Details`;
    },
    rowGroup: true,
  },
  { headerName: "Test Name", field: "testName" },
  { headerName: "Source", field: "source" },
  { headerName: "Test Category", field: "testCategory" },
  { headerName: "Pass/Fail", field: "pass_fail" },
  { headerName: "Weight", field: "weight" },
  { headerName: "Test Score", field: "testScore" },
  {
    headerName: "Item Score(Weighted)",
    field: "itemScore",
    cellRenderer: (params) => {
      if (params.value) {
        return params.value + "%";
      } else {
        return "";
      }
    },
  },
];
