import { Command } from "commander"
import prompts from "prompts"

export const create = new Command()
  .name("create")
  .description("Create a new cfx resource")
  .action(async () => {
    try {
      const response = await prompts({
        type: "select",
        name: "resource",
        message: "Select the resource you want to create",
        choices: [
          { title: "Component", value: "component" },
          { title: "Page", value: "page" },
          { title: "Layout", value: "layout" },
          { title: "Hook", value: "hook" },
          { title: "Service", value: "service" },
        ],
      })

      console.log(JSON.stringify(response, null, 2))
    } catch (err) {
      console.error(err)
    }
  })
