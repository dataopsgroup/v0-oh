"use client"

import { useState, useEffect } from "react"
import { DataGrid, type GridColDef, type GridValueGetterParams } from "@mui/x-data-grid"
import { Button, Typography, Box, CircularProgress } from "@mui/material"

interface AssessmentData {
  id: number
  name: string
  age: number
  city: string
  country: string
}

const AssessmentPageClient = () => {
  const [rows, setRows] = useState<AssessmentData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch("/api/assessment-data")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: AssessmentData[] = await response.json()
        setRows(data)
        setError(null)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "age", headerName: "Age", type: "number", width: 90 },
    { field: "city", headerName: "City", width: 130 },
    { field: "country", headerName: "Country", width: 130 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => `${params.row.name || ""} ${params.row.age || ""}`,
    },
  ]

  const handleRefresh = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/assessment-data")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data: AssessmentData[] = await response.json()
      setRows(data)
      setError(null)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Box p={3}>
        <Typography color="error">Error: {error}</Typography>
        <Button onClick={handleRefresh}>Retry</Button>
      </Box>
    )
  }

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Data Operations Assessment
      </Typography>
      <Button variant="contained" color="primary" onClick={handleRefresh} sx={{ mb: 2 }}>
        Refresh Data
      </Button>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5, 10, 20]} disableSelectionOnClick />
      </div>
    </Box>
  )
}

export default AssessmentPageClient
