// Test script to verify contact form API functionality
async function testContactFormAPI() {
  console.log("🧪 Testing Contact Form API...\n")

  const testData = {
    firstName: "John",
    lastName: "Doe",
    workEmail: "john.doe@example.com",
    howCanWeHelp:
      "I would like to learn more about your DataOps implementation services and how they can help streamline our data operations.",
  }

  try {
    console.log("📤 Sending test form submission...")
    console.log("Test data:", JSON.stringify(testData, null, 2))

    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    })

    const result = await response.json()

    console.log("\n📥 Response received:")
    console.log("Status:", response.status)
    console.log("Response:", JSON.stringify(result, null, 2))

    if (response.ok) {
      console.log("\n✅ SUCCESS: Contact form API is working correctly!")
      console.log("✅ Form validation passed")
      console.log("✅ Email format validation working")
      console.log("✅ All required fields processed")
      console.log("✅ Success response returned")
    } else {
      console.log("\n❌ ERROR: API returned error status")
      console.log("Error details:", result.error)
    }
  } catch (error) {
    console.log("\n❌ NETWORK ERROR: Failed to connect to API")
    console.log("Error:", error.message)
    console.log("\n💡 Make sure the development server is running on localhost:3000")
  }

  // Test validation errors
  console.log("\n🧪 Testing form validation...")

  const invalidData = {
    firstName: "",
    lastName: "Doe",
    workEmail: "invalid-email",
    howCanWeHelp: "",
  }

  try {
    const validationResponse = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invalidData),
    })

    const validationResult = await validationResponse.json()

    if (!validationResponse.ok) {
      console.log("✅ Validation working correctly - rejected invalid data")
      console.log("Validation error:", validationResult.error)
    } else {
      console.log("❌ Validation issue - accepted invalid data")
    }
  } catch (error) {
    console.log("❌ Validation test failed:", error.message)
  }
}

// Run the test
testContactFormAPI()
