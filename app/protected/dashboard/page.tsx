import Link from "next/link"
import { CalendarDays, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar currentPath="/protected/dashboard" />
      <main className="flex-1">
        <section className="container py-12">
          <div className="grid gap-6">
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome to ShiftMaster, your complete shift management solution.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Active staff members</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Shift Types</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">Morning, Afternoon, Evening, Night</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Shifts</CardTitle>
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">Next 7 days</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Today's Schedule</CardTitle>
                  <CardDescription>Overview of today's shifts and assigned employees</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Morning Shift (6:00 AM - 2:00 PM)</div>
                        <div className="text-sm text-muted-foreground">3 employees</div>
                      </div>
                      <div className="mt-2 text-sm">
                        <div>• John Smith</div>
                        <div>• Maria Garcia</div>
                        <div>• Robert Johnson</div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Afternoon Shift (2:00 PM - 10:00 PM)</div>
                        <div className="text-sm text-muted-foreground">4 employees</div>
                      </div>
                      <div className="mt-2 text-sm">
                        <div>• Sarah Williams</div>
                        <div>• Michael Brown</div>
                        <div>• Jennifer Davis</div>
                        <div>• David Miller</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <Link href="/protected/employees/new">
                      <Users className="mr-2 h-4 w-4" />
                      Add New Employee
                    </Link>
                  </Button>
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <Link href="/protected/shifts/new">
                      <Clock className="mr-2 h-4 w-4" />
                      Create New Shift
                    </Link>
                  </Button>
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <Link href="/protected/schedule/new">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      Schedule Employees
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}