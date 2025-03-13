"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [inputText, setInputText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputText.trim()) return

    // Split the input into lines
    const lines = inputText.trim().split("\n")

    // Generate the first line as the filename keyword
    const filenameKeyword = `Rename_${lines[0].trim().replace(/[^a-zA-Z0-9]/g, "_")}_rename.zahidhasan.com.bd.cmd`

    // Add the ASCII art and code as comments
    const commentHeader = `REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠴⠒⠋⠉⠉⠉⠉⠉⠙⠒⠦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠁⠀⠀⠀⣀⣀⣠⠤⠤⠤⠤⠤⣄⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡥⠴⠒⠊⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⡀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣷⣤⣀⠈⡆⠘⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⣸⣿⣿⣶⣤⡀⠀⣴⣿⡟⢉⠀⠀⠀⠉⠀⢸⡀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠁⠀⢀⣩⡛⢿⠉⡍⠛⣷⣾⣿⣷⢤⠴⠷⢄⣇⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡧⢰⣿⣿⣿⠇⠀⣷⠀⠉⠉⠉⠉⠀⠀⠀⠸⢿⠥⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⢀⠀⢹⣦⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⠀⠀⢀⡀⢠⡀⢛⣁⣬⠆⠉⠉⣱⡿⡍⠀⢸⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣇⢺⣧⣀⣈⣿⣿⣿⣷⣤⣴⣶⡿⣻⠁⠀⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡎⢿⠛⠛⠛⣿⣾⣏⣩⠍⠀⡸⠃⠀⣰⡧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢮⡳⡌⠉⠻⣿⡿⠀⠀⠼⠁⢠⠞⡟⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⢄⠀⠀⣿⣿⠀⠀⢀⡜⠁⠚⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡞⠈⠻⣗⠦⠽⠿⠤⠞⠁⠀⠀⠀⠀⣿⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠞⠁⣇⠀⠀⠈⠳⢄⡀⠀⠀⠀⠀⠀⠀⢀⡟⢸⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⠀⠀⠀⠀⢀⣀⡠⠤⠖⠒⠋⠉⡇⠀⠀⢹⡀⠀⠀⠀⠀⠙⠲⢤⡀⠀⢀⡴⠋⠀⢀⡇⠉⠲⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
REM ⠀⣠⠤⠒⠋⠉⠀⠀⠀⠀⠀⠀⢰⣧⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⡹⠓⠋⠲⡄⠀⠈⣧⠀⠀⠸⡍⠙⠲⠤⣄⣀⠀⠀⠀⠀⠀
REM ⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡿⠀⠀⠀⢻⡳⣄⠀⠀⠀⣠⠞⠀⠀⠀⠀⠘⣆⠀⣾⡄⠀⠀⠹⡄⠀⠀⠀⠈⠉⠒⢤⡀⠀
REM ⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡇⠀⠀⠀⠈⣇⠈⢣⡀⣰⢳⡀⠀⠀⠀⢀⡞⠉⠶⠁⢧⠀⠀⠀⢱⡀⠀⠀⠀⠀⠀⠀⢧⠀
REM ⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀⠀⠀⠀⢸⡀⠀⠙⠇⠀⢹⠒⠒⠒⢯⠀⠀⠀⠀⢸⡀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠘⣆
REM ⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠂⠀⠀⠸⠇⠀⠀⠀⠀⠟⠀⠀⠀⠈⠧⠀⠀⠀⠘⠇⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠻
REM ⠀⠀⠀⠁⠁⠀⠁⠀⠀⠀⠀⠈⠀⠀⠀⠈⠉⠉⠋⠉⠉⠉⠉⠁⠉⠉⠀⠉⠈⠁⠉⠉⠛⠛⠋⠉⠉⠉⠉⠉⠉⠉⠉⠀⠈⠀⠀
REM +--------------------------------------------+
REM | _  ______  ____    _____     _     _     _ |
REM || |/ /  _ \\/ ___|  |__  /__ _| |__ (_) __| ||
REM || ' /| | | \\___ \\    / // _\` | '_ \\| |/ _\` ||
REM || . \\| |_| |___) |  / /| (_| | | | | | (_| ||
REM ||_|\\_\\____/|____/  /____\\__,_|_| |_|_|\\__,_||
REM +--------------------------------------------+
REM 
REM 
REM 
REM 
REM 
REM Ẑ̶̘͔̱͕a̷̢͌͗́̋̽͝ḧ̸̢̨̼̘̯̙̬́̿͋̏̄͗̈́́̚͝ͅị̴̫̟̲̈́͗d̸̝̹͕̘̗͉̣̻͚̤̏́ ̴͉͙͖̣̭̖͙͓͊̓͂̚͜͝͠͠H̸͉͖̹̘̗͍̄͑̃̍́̒ͅͅa̶͎̯̰̪͖̓̆̎s̷̢̛̖̭̀̍̑̐͛̈́̐̌͜͠͝͠ͅȁ̴̲̣̰̭͖͉̩̝̯͑͌̓̆̈̀n̵̡̯͕̯̤̰̼͗̍̔̓͐̾͆͗̓͠͠͝
REM 
REM 
REM Hacking... phys_addr_t acpi_pci_root_get_mcfg_addr(acpi_handle handle)
REM {
REM 	acpi_status status = AE_NOT_EXIST;
REM 	unsigned long long mcfg_addr;
REM 
REM 	if (handle)
REM 		status = acpi_evaluate_integer(handle, METHOD_NAME__CBA,
REM 					       NULL, &mcfg_addr);
REM 	if (ACPI_FAILURE(status))
REM 		return 0;
REM 
REM 	return (phys_addr_t)mcfg_addr;
REM }
REM 
REM static acpi_status decode_type0_hpx_record(union acpi_object *record,
REM 					   struct hotplug_params *hpx)
REM {
REM 	int i;
REM 	union acpi_object *fields = record->package.elements;
REM 	u32 revision = fields[1].integer.value;
REM 
REM 	switch (revision) {
REM 	case 1:
REM 		if (record->package.count != 6)
REM 			return AE_ERROR;
REM 		for (i = 2; i < 6; i++)
REM 			if (fields[i].type != ACPI_TYPE_INTEGER)
REM 				return AE_ERROR;
REM 		hpx->t0 = &hpx->type0_data;
REM 		hpx->t0->revision        = revision;
REM 		hpx->t0->cache_line_size = fields[2].integer.value;
REM 		hpx->t0->latency_timer   = fields[3].integer.value;
REM 		hpx->t0->enable_serr     = fields[4].integer.value;
REM 		hpx->t0->enable_perr     = fields[5].integer.value;
REM 		break;
REM 	default:
REM 		printk(KERN_WARNING
REM 		       "%s: Type 0 Revision %d record not supported
REM ",
REM 		       __func__, revision);
REM 		return AE_ERROR;
REM 	}
REM 	return AE_OK;
REM }
REM 
REM static acpi_status decode_type1_hpx_record(union acpi_object *record,
REM 					   struct hotplug_params *hpx)
REM {
REM 	int i;
REM 	union acpi_object *fields = record->package.elements;
REM 	u32 revision = fields[1].integer.value;
REM 
REM 	switch (revision) {
REM 	case 1:
REM 		if (record->package.count != 5)
REM 			return AE_ERROR;
REM 		for (i = 2; i < 5; i++)
REM 			if (fields[i].type != ACPI_TYPE_INTEGER)
REM 				return AE_ERROR;
REM 		hpx->t1 = &hpx->type1_data;
REM 		hpx->t1->revision      = revision;
REM 		hpx->t1->max_mem_read  = fields[2].integer.value;
REM 		hpx->t1->avg_max_split = fields[3].integer.value;
REM 		hpx->t1->tot_max_split = fields[4].integer.value;
REM 		break;
REM 	default:
REM 		printk(KERN_WARNING
REM 		       "%s: Type 1 Revision %d record not supported
REM ",
REM 		       __func__, revision);
REM 		return AE_ERROR;
REM 	}
REM 	return AE_OK;
REM }`

    // Generate the content
    const output = lines.map((line, index) => {
      return `ren "${index + 1}.*" "${line.trim()}.*"`
    })

    // Join the output into a string
    const fileContent = commentHeader + "\n\n" + output.join("\n")

    // Create a blob and download it
    const blob = new Blob([fileContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filenameKeyword
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Rename Canva Images</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter your keywords here..."
              rows={10}
              className="w-full resize-none"
            />
            <Button type="submit" className="w-full">
              Download Rename File
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

