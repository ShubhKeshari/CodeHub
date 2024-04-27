import "cypress-localstorage-commands";

import data from "../../submissionData.json";
// let data = [{ submission_link: "http://localhost:5173/", id: 67890 }];

/// <reference types="cypress" />

let mockTodos = [
  { title: "learn DOM.", priority: "low", status: "pending" },
  { title: "learn CSS.", priority: "medium", status: "pending" },
  { title: "learn JavaScript.", priority: "high", status: "complete" },
  { title: "learn JavaScript.", priority: "high", status: "in-progress" },
];

data.map(({ submission_link: url, id }) => {
  describe("Test Beginner todo app", () => {
    let acc_score = 1;

    beforeEach(() => {
      cy.restoreLocalStorage();

      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    afterEach(() => {
      cy.saveLocalStorage();
    });
//2
    it("should able to add a tasks and update localStorage", () => {
      cy.visit(url);
      cy.get("input").clear().type("learn Backend.");
      cy.get("select").select("medium");

      cy.get("#submitBtn").should("exist").click();

      cy.wait(500);

      cy.window()
        .its("localStorage")
        .invoke("getItem", "tasks")
        .then((todos) => {
          const parsedTodos = JSON.parse(todos) || [];
          //  [{title: "example", priority: "low", status: "pending"}]
          expect(parsedTodos).to.have.lengthOf(1);
          expect(parsedTodos[0].status).to.equal("pending");
          expect(parsedTodos[0].title).to.equal("learn Backend.");
          expect(parsedTodos[0].priority).to.equal("medium");
        });

      cy.clearLocalStorage();

      cy.then(() => {
        acc_score += 2;
      });
    });
//1
    it("should show error for empty todo text", () => {
      cy.visit(url);
      cy.get("input").clear();
      cy.get("select").select("low");

      cy.on("window:alert", cy.stub().as("windowAlert"));
      cy.get("#submitBtn").should("exist").click();

      cy.get("@windowAlert").should(
        "have.been.calledOnceWithExactly",
        "Task cannot be empty!"
      );

      cy.then(() => {
        acc_score += 1;
      });
    });
//2
    it("should show all the tasks in the table with remove button and toggle status button", () => {
      cy.clearLocalStorage();
      cy.visit(url);

      mockTodos.forEach((e) => {
        cy.get("input").clear().type(e.title);
        cy.get("select").select(e.priority);
        cy.get("#submitBtn").should("exist").click();
        cy.wait(500);
      });

      cy.window().then((win) => {
        cy.stub(win, "localStorage").as("localStorage");
      });

      cy.get("tr").should("have.length", 5);

      mockTodos.forEach((e, i) => {
        cy.get("tr")
          .eq(i + 1)
          .should("contain", e.title);
        cy.get("tr")
          .eq(i + 1)
          .should("contain", e.priority);
        cy.get("tr")
          .eq(i + 1)
          .should("contain", "pending");
        cy.get("tr").within(() => {
          cy.get(".toggleStatus").should("exist");
          cy.get(".remove-btn").should("exist");
        });
	});
	
      cy.then(() => {
        acc_score += 1;
      });
    });
//2
    it("should able to toggle status of a task and update the local storage", () => {
      cy.clearLocalStorage();
      cy.visit(url);
      cy.window().then((win) => {
        cy.stub(win, "localStorage").as("localStorage");
      });
      cy.get("input").clear().type("learn Backend.");
      cy.get("select").select("medium");

      cy.get("#submitBtn").should("exist").click();
      cy.wait(500);
      cy.window()
        .its("localStorage")
        .invoke("getItem", "tasks")
        .then((todos) => {
          const parsedTodos = JSON.parse(todos) || [];
          //  [{title: "example", priority: "low", status: "pending"}]
          expect(parsedTodos).to.have.lengthOf(1);
          expect(parsedTodos[0].status).to.equal("pending");
          expect(parsedTodos[0].title).to.equal("learn Backend.");
          expect(parsedTodos[0].priority).to.equal("medium");
        });
      cy.get(".toggleStatus").eq(0).contains("pending");
      cy.get(".toggleStatus").eq(0).should("exist").click();

      cy.wait(500).then(() => {
        cy.get(".toggleStatus").eq(0).contains("in-progress");

        cy.window()
          .its("localStorage")
          .invoke("getItem", "tasks")
          .then((todos) => {
            const parsedTodos = JSON.parse(todos) || [];
            expect(parsedTodos).to.have.lengthOf(1);
            expect(parsedTodos[0].status).to.equal("in-progress");
          });
      });

      cy.get(".toggleStatus").eq(0).should("exist").click();

      cy.wait(500).then(() => {
        cy.get(".toggleStatus").eq(0).contains("complete");

        cy.window()
          .its("localStorage")
          .invoke("getItem", "tasks")
          .then((todos) => {
            const parsedTodos = JSON.parse(todos) || [];
            expect(parsedTodos).to.have.lengthOf(1);
            expect(parsedTodos[0].status).to.equal("complete");
          });
      });

      cy.then(() => {
        acc_score += 2;
      });
    });
//2
    it("should able to add a tasks in deleted tasks and update local storage", () => {
      cy.clearLocalStorage();
      cy.visit(url);
      cy.window().then((win) => {
        cy.stub(win, "localStorage").as("localStorage");
      });

      cy.get("input").clear().type("learn Backend.");
      cy.get("select").select("medium");
      cy.get("#submitBtn").should("exist").click();
      cy.wait(500);

      cy.window()
        .its("localStorage")
        .invoke("getItem", "tasks")
        .then((todos) => {
          const parsedTodos = JSON.parse(todos) || [];
          expect(parsedTodos).to.have.lengthOf(1);
          expect(parsedTodos[0].status).to.equal("pending");
          expect(parsedTodos[0].title).to.equal("learn Backend.");
          expect(parsedTodos[0].priority).to.equal("medium");
        });
      cy.window()
        .its("localStorage")
        .invoke("getItem", "deletedTasks")
        .then((archiveTodos) => {
          const parsedTodos = JSON.parse(archiveTodos) || [];
          expect(parsedTodos).to.have.lengthOf(0);
        });
      cy.get("tr").should("have.length", 2);
      cy.get(".remove-btn ").eq(0).should("exist").click();

      cy.wait(500).then(() => {
        cy.get("tr").should("have.length", 1);

        cy.window()
          .its("localStorage")
          .invoke("getItem", "deletedTasks")
          .then((todos) => {
            const parsedTodos = JSON.parse(todos) || [];
            //  [{title: "example", priority: "low", status: "pending"}]
            expect(parsedTodos).to.have.lengthOf(1);
            expect(parsedTodos[0].status).to.equal("pending");
            expect(parsedTodos[0].title).to.equal("learn Backend.");
            expect(parsedTodos[0].priority).to.equal("medium");
          });
        cy.window()
          .its("localStorage")
          .invoke("getItem", "tasks")
          .then((archiveTodos) => {
            const parsedTodos = JSON.parse(archiveTodos) || [];
            expect(parsedTodos).to.have.lengthOf(0);
          });
      });

      cy.then(() => {
        acc_score += 2;
      });
    });
//1
    it("should show different text color for different priority", () => {
      cy.clearLocalStorage();
      cy.visit(url);

      mockTodos.forEach((e) => {
        cy.get("input").clear().type(e.title);
        cy.get("select").select(e.priority);
        cy.get("#submitBtn").should("exist").click();
        cy.wait(500);
      });

      cy.window().then((win) => {
        cy.stub(win, "localStorage").as("localStorage");
      });

      cy.get("tr").should("have.length", 5);

      mockTodos.forEach((e, i) => {
        cy.get("tr")
          .eq(i + 1)
          .within(() => {
            cy.get("td")
              .eq(1)
              .should(
                "have.css",
                "color",
                e.priority === "medium"
                  ? "rgb(0, 0, 255)"
                  : e.priority === "high"
                  ? "rgb(255, 0, 0)"
                  : "rgb(0, 128, 0)"
              );
          });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });
    // to check bbutton bg color
//1
    it("should show different background color of buttons for different status while add tasks", () => {
      cy.clearLocalStorage();
      cy.visit(url);

      mockTodos.forEach((e) => {
        cy.get("input").clear().type(e.title);
        cy.get("select").select(e.priority);
        cy.get("#submitBtn").should("exist").click();
        cy.wait(500);
      });

      cy.window().then((win) => {
        cy.stub(win, "localStorage").as("localStorage");
      });

      cy.get("tr").should("have.length", 5);

      cy.get("td").within(() => {
        cy.get(".toggleStatus").should(
          "contain",
          "pending"
        );

        cy.get(".toggleStatus").should(
          "have.css",
          "background-color",
          "rgb(255, 165, 0)"
        );
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    // To check the changed status bgColor
    //1
    it("should show different background color of buttons for different status", () => {
      cy.clearLocalStorage();
      cy.visit(url);

      mockTodos.forEach((e) => {
        cy.get("input").clear().type(e.title);
        cy.get("select").select(e.priority);
        cy.get("#submitBtn").should("exist").click();
        cy.wait(500);
      });

      cy.window().then((win) => {
        cy.stub(win, "localStorage").as("localStorage");
      });

      cy.get("tr").should("have.length", 5);

      cy.get(".toggleStatus").eq(0).contains("pending");
      cy.get(".toggleStatus").should(
        "have.css",
        "background-color",
        "rgb(255, 165, 0)"
      );

      cy.get(".toggleStatus").eq(0).should("exist").click();

      cy.wait(500).then(() => {
        cy.get(".toggleStatus").eq(0).contains("in-progress");
        cy.get(".toggleStatus").should(
          "have.css",
          "background-color",
          "rgb(76, 175, 80)"
        );
      });

      cy.get(".toggleStatus").eq(0).should("exist").click();
      cy.wait(500).then(() => {
        cy.get(".toggleStatus").eq(0).contains("complete");
        cy.get(".toggleStatus").should(
          "have.css",
          "background-color",
          "rgb(255, 192, 203)"
        );
      });

      cy.then(() => {
        acc_score += 1;
      });
    });
//2
    it("should able to show all the deleted tasks with restore and delete button", () => {
      cy.clearLocalStorage();

      cy.window().then((win) => {
        cy.stub(win, "localStorage").as("localStorage");
      });

      cy.window()
        .its("localStorage")
        .invoke("setItem", "deletedTasks", JSON.stringify(mockTodos));

      cy.window()
        .its("localStorage")
        .invoke("getItem", "deletedTasks")
        .then((archiveTodos) => {
          const parsedTodos = JSON.parse(archiveTodos) || [];
          expect(parsedTodos).to.have.lengthOf(4);
        });
      cy.visit(url + "/deletedTask.html");
      cy.get("tr").should("have.length", 5);

      mockTodos.forEach((e, i) => {
        cy.get("tr")
          .eq(i + 1)
          .should("contain", e.title);
        cy.get("tr")
          .eq(i + 1)
          .should("contain", e.priority);
        cy.get("tr")
          .eq(i + 1)
          .should("contain", e.status);
        cy.get("tr").within(() => {
          cy.get(".restore-btn").should("exist");
          cy.get(".delete-btn").should("exist");
        });
      });

      cy.then(() => {
        acc_score += 2;
      });
    });
    //2
    it("should able to restore a deleted tasks", () => {
      cy.clearLocalStorage();

      cy.window().then((win) => {
        cy.stub(win, "localStorage").as("localStorage");
      });

      cy.window()
        .its("localStorage")
        .invoke("setItem", "deletedTasks", JSON.stringify(mockTodos));

      cy.window()
        .its("localStorage")
        .invoke("getItem", "deletedTasks")
        .then((deletedTask) => {
          const parsedTodos = JSON.parse(deletedTask) || [];
          expect(parsedTodos).to.have.lengthOf(4);
        });
      cy.visit(url + "/deletedTask.html");
      cy.get("tr").should("have.length", 5);
      cy.get(".restore-btn").eq(0).should("exist").click();

      cy.wait(500).then(() => {
        cy.get("tr").should("have.length", 4);

        cy.window()
          .its("localStorage")
          .invoke("getItem", "deletedTasks")
          .then((todos) => {
            const parsedTodos = JSON.parse(todos) || [];
            expect(parsedTodos).to.have.lengthOf(3);
            expect(parsedTodos[0].status).to.equal(mockTodos[1].status);
            expect(parsedTodos[0].title).to.equal(mockTodos[1].title);
            expect(parsedTodos[0].priority).to.equal(mockTodos[1].priority);
            expect(parsedTodos[1].status).to.equal(mockTodos[2].status);
            expect(parsedTodos[1].title).to.equal(mockTodos[2].title);
            expect(parsedTodos[1].priority).to.equal(mockTodos[2].priority);
          });
        cy.window()
          .its("localStorage")
          .invoke("getItem", "tasks")
          .then((deletedTask) => {
            const parsedTodos = JSON.parse(deletedTask) || [];
            expect(parsedTodos).to.have.lengthOf(1);
            expect(parsedTodos[0].status).to.equal(mockTodos[0].status);
            expect(parsedTodos[0].title).to.equal(mockTodos[0].title);
            expect(parsedTodos[0].priority).to.equal(mockTodos[0].priority);
          });
      });

      cy.then(() => {
        acc_score += 2;
      });
    });
    //2
    it("should able to delete permanently a remove tasks", () => {
      cy.clearLocalStorage();

      cy.window().then((win) => {
        cy.stub(win, "localStorage").as("localStorage");
      });

      cy.window()
        .its("localStorage")
        .invoke("setItem", "deletedTasks", JSON.stringify(mockTodos));

      cy.window()
        .its("localStorage")
        .invoke("getItem", "deletedTasks")
        .then((deletedTask) => {
          const parsedTasks = JSON.parse(deletedTask) || [];
          expect(parsedTasks).to.have.lengthOf(4);
        });
      cy.visit(url + "/deletedTask.html");
      cy.get("tr").should("have.length", 5);
      cy.get(".delete-btn").eq(0).should("exist").click();

      cy.wait(500).then(() => {
        cy.get("tr").should("have.length", 4);

        cy.window()
          .its("localStorage")
          .invoke("getItem", "deletedTasks")
          .then((todos) => {
            const parsedTasks = JSON.parse(todos) || [];
            //  [{title: "example", priority: "low", status: "pending"}]
            expect(parsedTasks).to.have.lengthOf(3);
            expect(parsedTasks[0].status).to.equal(mockTodos[1].status);
            expect(parsedTasks[0].title).to.equal(mockTodos[1].title);
            expect(parsedTasks[0].priority).to.equal(mockTodos[1].priority);
            expect(parsedTasks[1].status).to.equal(mockTodos[2].status);
            expect(parsedTasks[1].title).to.equal(mockTodos[2].title);
            expect(parsedTasks[1].priority).to.equal(mockTodos[2].priority);
          });
        cy.window()
          .its("localStorage")
          .invoke("getItem", "tasks")
          .then((deletedTask) => {
            const parsedTasks = JSON.parse(deletedTask) || [];
            expect(parsedTasks).to.have.lengthOf(0);
          });
      });

      cy.then(() => {
        acc_score += 2;
      });
    });
    //2
    it("should able to filter deleted tasks by Priority", () => {
      cy.clearLocalStorage();

      cy.window().then((win) => {
        cy.stub(win, "localStorage").as("localStorage");
      });

      cy.window()
        .its("localStorage")
        .invoke("setItem", "deletedTasks", JSON.stringify(mockTodos));

      cy.window()
        .its("localStorage")
        .invoke("getItem", "deletedTasks")
        .then((archiveTodos) => {
          const parsedTodos = JSON.parse(archiveTodos) || [];
          expect(parsedTodos).to.have.lengthOf(4);
        });
      cy.visit(url + "/deletedTask.html");
      cy.get("tr").should("have.length", 5);

      cy.get("#priorityFilter").select("low");

      cy.wait(500).then(() => {
        cy.get("tr").should("have.length", 2);
        cy.get("tr").eq(1).should("contain", mockTodos[0].title);
        cy.get("tr").eq(1).should("contain", mockTodos[0].priority);
        cy.get("tr").eq(1).should("contain", mockTodos[0].status);
      });
      cy.get("#priorityFilter").select("medium");

      cy.wait(500).then(() => {
        cy.get("tr").should("have.length", 2);
        cy.get("tr").eq(1).should("contain", mockTodos[1].title);
        cy.get("tr").eq(1).should("contain", mockTodos[1].priority);
        cy.get("tr").eq(1).should("contain", mockTodos[1].status);
      });
      cy.get("#priorityFilter").select("high");

      cy.wait(500).then(() => {
        cy.get("tr").should("have.length", 3);
        cy.get("tr").eq(1).should("contain", mockTodos[2].title);
        cy.get("tr").eq(1).should("contain", mockTodos[2].priority);
        cy.get("tr").eq(1).should("contain", mockTodos[2].status);
      });

 
      cy.then(() => {
        acc_score += 2;
      });
    });
//1
    it("should able to filter deleted tasks by Priority default options show all the tasks", () => {
      cy.clearLocalStorage();

      cy.window().then((win) => {
        cy.stub(win, "localStorage").as("localStorage");
      });

      cy.window()
        .its("localStorage")
        .invoke("setItem", "deletedTasks", JSON.stringify(mockTodos));

      cy.window()
        .its("localStorage")
        .invoke("getItem", "deletedTasks")
        .then((archiveTodos) => {
          const parsedTodos = JSON.parse(archiveTodos) || [];
          expect(parsedTodos).to.have.lengthOf(4);
        });
      cy.visit(url + "/deletedTask.html");
      cy.get("tr").should("have.length", 5);

      cy.get("#priorityFilter").select("low");

      cy.wait(500).then(() => {
        cy.get("tr").should("have.length", 2);
        cy.get("tr").eq(1).should("contain", mockTodos[0].title);
        cy.get("tr").eq(1).should("contain", mockTodos[0].priority);
        cy.get("tr").eq(1).should("contain", mockTodos[0].status);
      });
      cy.get("#priorityFilter").select("low");

      cy.wait(500);
      cy.get("#priorityFilter").select("");
      cy.get("tr").should("have.length", 5);

      cy.then(() => {
        acc_score += 1;
      });

    })
    //2
    it("should able to filter deleted tasks by status", () => {
     
        cy.clearLocalStorage();

        cy.window().then((win) => {
          cy.stub(win, "localStorage").as("localStorage");
        });

        cy.window()
          .its("localStorage")
          .invoke("setItem", "deletedTasks", JSON.stringify(mockTodos));

        cy.window()
          .its("localStorage")
          .invoke("getItem", "deletedTasks")
          .then((archiveTodos) => {
            const parsedTodos = JSON.parse(archiveTodos) || [];
            expect(parsedTodos).to.have.lengthOf(4);
          });
        cy.visit(url + "/deletedTask.html");
        cy.get("tr").should("have.length", 5);
        cy.get("#statusFilter").select("pending");

        cy.wait(500).then(() => {
          cy.get("tr").should("have.length", 3);

          cy.get("tr").eq(1).should("contain", mockTodos[0].title);
          cy.get("tr").eq(1).should("contain", mockTodos[0].priority);
          cy.get("tr").eq(1).should("contain", mockTodos[0].status);

          cy.get("tr").eq(2).should("contain", mockTodos[1].title);
          cy.get("tr").eq(2).should("contain", mockTodos[1].priority);
          cy.get("tr").eq(2).should("contain", mockTodos[1].status);
        });
        cy.get("#statusFilter").select("complete");

        cy.wait(500).then(() => {
          cy.get("tr").should("have.length", 2);
          cy.get("tr").eq(1).should("contain", mockTodos[2].title);
          cy.get("tr").eq(1).should("contain", mockTodos[2].priority);
          cy.get("tr").eq(1).should("contain", mockTodos[2].status);
        });

        cy.get("#statusFilter").select("");
        cy.get("tr").should("have.length", 5);

        cy.then(() => {
        acc_score += 2;
      });
    });
//1
    it("should able to filter deleted tasks by status default options show all the tasks", () => {
      cy.then(() => {
        cy.clearLocalStorage();

        cy.window().then((win) => {
          cy.stub(win, "localStorage").as("localStorage");
        });

        cy.window()
          .its("localStorage")
          .invoke("setItem", "deletedTasks", JSON.stringify(mockTodos));

        cy.window()
          .its("localStorage")
          .invoke("getItem", "deletedTasks")
          .then((archiveTodos) => {
            const parsedTodos = JSON.parse(archiveTodos) || [];
            expect(parsedTodos).to.have.lengthOf(4);
          });
        cy.visit(url + "/deletedTask.html");
        cy.get("tr").should("have.length", 5);
        cy.get("#statusFilter").select("pending");

        cy.wait(500);
        cy.get("#statusFilter").select("");
        cy.get("tr").should("have.length", 5);

        cy.then(() => {
          acc_score += 1;
        });
  
      });
    });


    after(`generate score`, () => {
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});
