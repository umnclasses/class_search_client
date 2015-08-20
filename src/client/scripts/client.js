import Debug from 'debug';
import App from '../../app';

var attachElement = document.getElementById('app');

var state = {
  courses: [
    {
      "type": "course",
      "course_id": "002066",
      "catalog_number": "1101W",
      "description": "Fundamental principles of physics in the context of everyday world. Use of kinematics/dynamics principles and quantitative/qualitative problem solving techniques to understand natural phenomena. Lecture, recitation, lab.",
      "title": "Intro College Phys I",
      "repeatable": "N",
      "repeat_limit": "1",
      "units_repeat_limit": "4",
      "offer_frequency": "Every Fall, Spring and Summer",
      "credits_minimum": "4",
      "credits_maximum": "4",
      "grading_basis": {
        "type": "grading_basis",
        "grading_basis_id": "OPT",
        "description": "Student Option"
      },
      "subject": {
        "type": "subject",
        "subject_id": "PHYS",
        "description": "Physics"
      },
      "course_attributes": [
        {
          "type": "attribute",
          "attribute_id": "WI",
          "family": "CLE"
        },
        {
          "type": "attribute",
          "attribute_id": "PHYS",
          "family": "CLE"
        }
      ],
      "sections": [
        {
          "type": "section",
          "class_number": "10786",
          "number": "100",
          "component": "LEC",
          "location": "TCEASTBANK",
          "notes": "3-hr common final exam",
          "instruction_mode": {
            "type": "instruction_mode",
            "instruction_mode_id": "P",
            "description": "In Person Term Based"
          },
          "instructors": [
            {
              "type": "instructor",
              "name": "Vincent Noireaux",
              "email": "email@umn.edu",
              "role": "PI"
            },
            {
              "type": "instructor",
              "name": "Jennifer Kroschel",
              "email": "email@umn.edu",
              "role": "PRXY"
            }
          ],
          "meeting_patterns": [
            {
              "type": "meeting_pattern",
              "start_time": "13:25",
              "end_time": "14:15",
              "start_date": "2014-09-02",
              "end_date": "2014-12-10",
              "location": {
                "type": "location",
                "location_id": "PHYS00150",
                "description": "Phys 150"
              },
              "days": [
                {
                  "type": "day",
                  "name": "monday",
                  "abbreviation": "m"
                },
                {
                  "type": "day",
                  "name": "wednesday",
                  "abbreviation": "w"
                },
                {
                  "type": "day",
                  "name": "friday",
                  "abbreviation": "f"
                }
              ]
            }
          ],
          "combined_sections": []
        },
        {
          "type": "section",
          "class_number": "10787",
          "number": "102",
          "component": "DIS",
          "location": "TCEASTBANK",
          "notes": "3-hr common final exam",
          "instruction_mode": {
            "type": "instruction_mode",
            "instruction_mode_id": "P",
            "description": "In Person Term Based"
          },
          "instructors": [
            {
              "type": "instructor",
              "name": "Jennifer Kroschel",
              "email": "email@umn.edu",
              "role": "PRXY"
            },
            {
              "type": "instructor",
              "name": "Jarrett Brown",
              "email": "email@umn.edu",
              "role": "TA"
            }
          ],
          "meeting_patterns": [
            {
              "type": "meeting_pattern",
              "start_time": "13:25",
              "end_time": "14:15",
              "start_date": "2014-09-02",
              "end_date": "2014-12-10",
              "location": {
                "type": "location",
                "location_id": "FORDH00170",
                "description": "Ford Hall 170"
              },
              "days": [
                {
                  "type": "day",
                  "name": "thursday",
                  "abbreviation": "th"
                }
              ]
            }
          ],
          "combined_sections": []
        },
        {
          "type": "section",
          "class_number": "10788",
          "number": "103",
          "component": "LAB",
          "location": "TCEASTBANK",
          "notes": "3-hr common final exam",
          "instruction_mode": {
            "type": "instruction_mode",
            "instruction_mode_id": "P",
            "description": "In Person Term Based"
          },
          "instructors": [
            {
              "type": "instructor",
              "name": "Vincent Noireaux",
              "email": "email@umn.edu",
              "role": "PI"
            },
            {
              "type": "instructor",
              "name": "Jennifer Kroschel",
              "email": "email@umn.edu",
              "role": "PRXY"
            },
            {
              "type": "instructor",
              "name": "Jarrett Brown",
              "email": "email@umn.edu",
              "role": "TA"
            }
          ],
          "meeting_patterns": [
            {
              "type": "meeting_pattern",
              "start_time": "16:40",
              "end_time": "18:35",
              "start_date": "2014-09-02",
              "end_date": "2014-12-10",
              "location": {
                "type": "location",
                "location_id": "PHYS000130",
                "description": "Tate Laboratory 130"
              },
              "days": [
                {
                  "type": "day",
                  "name": "monday",
                  "abbreviation": "m"
                }
              ]
            }
          ],
          "combined_sections": []
        },
        {
          "type": "section",
          "class_number": "10789",
          "number": "104",
          "component": "DIS",
          "location": "TCEASTBANK",
          "notes": "3-hr common final exam",
          "instruction_mode": {
            "type": "instruction_mode",
            "instruction_mode_id": "P",
            "description": "In Person Term Based"
          },
          "instructors": [
            {
              "type": "instructor",
              "name": "Jennifer Kroschel",
              "email": "email@umn.edu",
              "role": "PRXY"
            },
            {
              "type": "instructor",
              "name": "Hannah Rogers",
              "email": "email@umn.edu",
              "role": "TA"
            }
          ],
          "meeting_patterns": [
            {
              "type": "meeting_pattern",
              "start_time": "13:25",
              "end_time": "14:15",
              "start_date": "2014-09-02",
              "end_date": "2014-12-10",
              "location": {
                "type": "location",
                "location_id": "STSS000117",
                "description": "Science Tchg Student Svcs 117"
              },
              "days": [
                {
                  "type": "day",
                  "name": "thursday",
                  "abbreviation": "th"
                }
              ]
            }
          ],
          "combined_sections": []
        },
        {
          "type": "section",
          "class_number": "10790",
          "number": "105",
          "component": "LAB",
          "location": "TCEASTBANK",
          "notes": "3-hr common final exam",
          "instruction_mode": {
            "type": "instruction_mode",
            "instruction_mode_id": "P",
            "description": "In Person Term Based"
          },
          "instructors": [
            {
              "type": "instructor",
              "name": "Vincent Noireaux",
              "email": "email@umn.edu",
              "role": "PI"
            },
            {
              "type": "instructor",
              "name": "Jennifer Kroschel",
              "email": "email@umn.edu",
              "role": "PRXY"
            },
            {
              "type": "instructor",
              "name": "Hannah Rogers",
              "email": "email@umn.edu",
              "role": "TA"
            }
          ],
          "meeting_patterns": [
            {
              "type": "meeting_pattern",
              "start_time": "10:10",
              "end_time": "12:05",
              "start_date": "2014-09-02",
              "end_date": "2014-12-10",
              "location": {
                "type": "location",
                "location_id": "PHYS000130",
                "description": "Tate Laboratory 130"
              },
              "days": [
                {
                  "type": "day",
                  "name": "tuesday",
                  "abbreviation": "t"
                }
              ]
            }
          ],
          "combined_sections": []
        },
        {
          "type": "section",
          "class_number": "10791",
          "number": "106",
          "component": "DIS",
          "location": "TCEASTBANK",
          "notes": "3-hr common final exam",
          "instruction_mode": {
            "type": "instruction_mode",
            "instruction_mode_id": "P",
            "description": "In Person Term Based"
          },
          "instructors": [
            {
              "type": "instructor",
              "name": "Jennifer Kroschel",
              "email": "email@umn.edu",
              "role": "PRXY"
            },
            {
              "type": "instructor",
              "name": "Kent Bodurtha",
              "email": "email@umn.edu",
              "role": "TA"
            }
          ],
          "meeting_patterns": [
            {
              "type": "meeting_pattern",
              "start_time": "13:25",
              "end_time": "14:15",
              "start_date": "2014-09-02",
              "end_date": "2014-12-10",
              "location": {
                "type": "location",
                "location_id": "PEIKH00335",
                "description": "Peik Hall 335"
              },
              "days": [
                {
                  "type": "day",
                  "name": "thursday",
                  "abbreviation": "th"
                }
              ]
            }
          ],
          "combined_sections": []
        },
        {
          "type": "section",
          "class_number": "10792",
          "number": "107",
          "component": "LAB",
          "location": "TCEASTBANK",
          "notes": "3-hr common final exam",
          "instruction_mode": {
            "type": "instruction_mode",
            "instruction_mode_id": "P",
            "description": "In Person Term Based"
          },
          "instructors": [
            {
              "type": "instructor",
              "name": "Vincent Noireaux",
              "email": "email@umn.edu",
              "role": "PI"
            },
            {
              "type": "instructor",
              "name": "Jennifer Kroschel",
              "email": "email@umn.edu",
              "role": "PRXY"
            },
            {
              "type": "instructor",
              "name": "Kent Bodurtha",
              "email": "email@umn.edu",
              "role": "TA"
            }
          ],
          "meeting_patterns": [
            {
              "type": "meeting_pattern",
              "start_time": "11:15",
              "end_time": "13:10",
              "start_date": "2014-09-02",
              "end_date": "2014-12-10",
              "location": {
                "type": "location",
                "location_id": "PHYS000130",
                "description": "Tate Laboratory 130"
              },
              "days": [
                {
                  "type": "day",
                  "name": "thursday",
                  "abbreviation": "th"
                }
              ]
            }
          ],
          "combined_sections": []
        },
        {
          "type": "section",
          "class_number": "10793",
          "number": "108",
          "component": "DIS",
          "location": "TCEASTBANK",
          "notes": "3-hr common final exam",
          "instruction_mode": {
            "type": "instruction_mode",
            "instruction_mode_id": "P",
            "description": "In Person Term Based"
          },
          "instructors": [
            {
              "type": "instructor",
              "name": "Jennifer Kroschel",
              "email": "email@umn.edu",
              "role": "PRXY"
            },
            {
              "type": "instructor",
              "name": "Michael Kreshchuk",
              "email": "email@umn.edu",
              "role": "TA"
            }
          ],
          "meeting_patterns": [
            {
              "type": "meeting_pattern",
              "start_time": "13:25",
              "end_time": "14:15",
              "start_date": "2014-09-02",
              "end_date": "2014-12-10",
              "location": {
                "type": "location",
                "location_id": "BUH0000120",
                "description": "Burton Hall 120"
              },
              "days": [
                {
                  "type": "day",
                  "name": "thursday",
                  "abbreviation": "th"
                }
              ]
            }
          ],
          "combined_sections": []
        },
        {
          "type": "section",
          "class_number": "10794",
          "number": "109",
          "component": "LAB",
          "location": "TCEASTBANK",
          "notes": "3-hr common final exam",
          "instruction_mode": {
            "type": "instruction_mode",
            "instruction_mode_id": "P",
            "description": "In Person Term Based"
          },
          "instructors": [
            {
              "type": "instructor",
              "name": "Vincent Noireaux",
              "email": "email@umn.edu",
              "role": "PI"
            },
            {
              "type": "instructor",
              "name": "Jennifer Kroschel",
              "email": "email@umn.edu",
              "role": "PRXY"
            },
            {
              "type": "instructor",
              "name": "Michael Kreshchuk",
              "email": "email@umn.edu",
              "role": "TA"
            }
          ],
          "meeting_patterns": [
            {
              "type": "meeting_pattern",
              "start_time": "12:20",
              "end_time": "14:15",
              "start_date": "2014-09-02",
              "end_date": "2014-12-10",
              "location": {
                "type": "location",
                "location_id": "PHYS000130",
                "description": "Tate Laboratory 130"
              },
              "days": [
                {
                  "type": "day",
                  "name": "tuesday",
                  "abbreviation": "t"
                }
              ]
            }
          ],
          "combined_sections": []
        }
      ]
    },
    {
      "type": "course",
      "course_id": "795342",
      "catalog_number": "3120",
      "description": "Political, cultural, historical linkages between Africans, African-Americans, African-Caribbean. Black socio-political movements/radical intellectual trends in late 19th/20th centuries. Colonialism/racism. Protest organizations, radical movements in United States/Europe.",
      "title": "Soc Mvts in African Diaspora",
      "repeatable": "N",
      "repeat_limit": "1",
      "units_repeat_limit": "3",
      "offer_frequency": "Every Fall",
      "credits_minimum": "3",
      "credits_maximum": "3",
      "grading_basis": {
        "type": "grading_basis",
        "grading_basis_id": "AFV",
        "description": "A-F or Audit"
      },
      "subject": {
        "type": "subject",
        "subject_id": "AFRO",
        "description": "African Amer & African Studies"
      },
      "equivalency": {
        "type": "equivalency",
        "equivalency_id": "00788"
      },
      "course_attributes": [
        {
          "type": "attribute",
          "attribute_id": "HIS",
          "family": "CLE"
        },
        {
          "type": "attribute",
          "attribute_id": "GP",
          "family": "CLE"
        }
      ],
      "sections": [
        {
          "type": "section",
          "class_number": "26191",
          "number": "001",
          "component": "LEC",
          "location": "TCWESTBANK",
          "notes": "",
          "instruction_mode": {
            "type": "instruction_mode",
            "instruction_mode_id": "P",
            "description": "In Person Term Based"
          },
          "instructors": [
            {
              "type": "instructor",
              "name": "Yuichiro Onishi",
              "email": "email@umn.edu",
              "role": "PI"
            }
          ],
          "meeting_patterns": [
            {
              "type": "meeting_pattern",
              "start_time": "13:00",
              "end_time": "14:15",
              "start_date": "2014-09-02",
              "end_date": "2014-12-10",
              "location": {
                "type": "location",
                "location_id": "BLEGH00245",
                "description": "Blegen Hall 245"
              },
              "days": [
                {
                  "type": "day",
                  "name": "tuesday",
                  "abbreviation": "t"
                },
                {
                  "type": "day",
                  "name": "thursday",
                  "abbreviation": "th"
                }
              ]
            }
          ],
          "combined_sections": [
            {
              "type": "combined_section",
              "catalog_number": "3456",
              "subject_id": "HIST",
              "section_number": "001"
            },
            {
              "type": "combined_section",
              "catalog_number": "5120",
              "subject_id": "AFRO",
              "section_number": "001"
            }
          ]
        }
      ]
    },
    {
      "type": "course",
      "course_id": "803218",
      "id": 559386,
      "catalog_number": "2311",
      "description": "Introduction to core biological concepts, from biomolecules to complex systems. How principles from biochemistry, cellular/molecular biology, genetics/diversity, and evolution contribute to understanding of complex systems. Problem solving, applications to health sciences. Lab.\n\nprereq: [Grade of at least C- in [[MATH 1161 or equiv], [CHEM 1231 or equiv]]] or placement test",
      "title": "Integrative Biology",
      "repeatable": "N",
      "repeat_limit": "1",
      "units_repeat_limit": "5",
      "offer_frequency": "Every Spring",
      "credits_minimum": "5",
      "credits_maximum": "5",
      "grading_basis": {
          "type": "grading_basis",
          "grading_basis_id": "AFV",
          "id": 10563,
          "description": "A-F or Audit"
      },
      "subject": {
          "type": "subject",
          "subject_id": "BIOL",
          "id": 38532,
          "description": "Biology"
      },
      "course_attributes": [
        {
              "type": "attribute",
              "attribute_id": "BIOL",
              "id": 11689,
              "family": "CLE"
        },
        {
              "type": "attribute",
              "attribute_id": "TS",
              "id": 11682,
              "family": "CLE"
        }
      ],
      "sections": []
    }
  ]

};

var app;

Debug.enable('myApp*');

// Create new app and attach to element
app = new App({
  state: state
});

app.renderToDOM(attachElement);
