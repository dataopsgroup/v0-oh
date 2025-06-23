// Test form validation and submission logic
function testFormValidation() {
  console.log("🧪 Testing Form Validation Logic...\n")

  const testCases = [
    {
      name: "Valid submission",
      data: {
        firstName: "John",
        lastName: "Doe",
        workEmail: "john.doe@company.com",
        howCanWeHelp: "I need help with data operations.",
      },
      shouldPass: true,
    },
    {
      name: "Missing first name",
      data: {
        firstName: "",
        lastName: "Doe",
        workEmail: "john.doe@company.com",
        howCanWeHelp: "I need help with data operations.",
      },
      shouldPass: false,
    },
    {
      name: "Invalid email",
      data: {
        firstName: "John",
        lastName: "Doe",
        workEmail: "invalid-email",
        howCanWeHelp: "I need help with data operations.",
      },
      shouldPass: false,
    },
    {
      name: "Missing message",
      data: {
        firstName: "John",
        lastName: "Doe",
        workEmail: "john.doe@company.com",
        howCanWeHelp: "",
      },
      shouldPass: false,
    },
  ]

  testCases.forEach((testCase, index) => {
    console.log(`${index + 1}. Testing: ${testCase.name}`)

    // Validate required fields
    const { firstName, lastName, workEmail, howCanWeHelp } = testCase.data
    const hasAllFields = firstName && lastName && workEmail && howCanWeHelp

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValidEmail = emailRegex.test(workEmail)

    const isValid = hasAllFields && isValidEmail

    if (isValid === testCase.shouldPass) {
      console.log(`   ✅ ${isValid ? "Valid" : "Invalid"} (as expected)`)
    } else {
      console.log(`   ❌ Expected ${testCase.shouldPass ? "valid" : "invalid"}, got ${isValid ? "valid" : "invalid"}`)
    }

    if (!hasAllFields) {
      console.log("   Missing fields detected")
    }
    if (!isValidEmail && workEmail) {
      console.log("   Invalid email format detected")
    }
    console.log("")
  })
}

testFormValidation()
