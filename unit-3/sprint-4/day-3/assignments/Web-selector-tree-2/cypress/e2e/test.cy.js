import data from "../../submissionData.json"; // do not create this file
//let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

data.forEach((ele) => {
  describe("Test", () => {
    let url = ele.submission_link;
    let acc_score = 1;
    if (url && url.trim().length) {
      it("Check if the basic structure is there or not", () => {
        cy.visit(url);
        cy.get(".app > .grandfather").children().should("have.length", 2);
        cy.get(".app > .grandfather")
          .children(".father")
          .should("have.length", 1);
        cy.get(".app > .grandfather")
          .children(".uncle")
          .should("have.length", 1);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it("Check the child structure", () => {
        cy.visit(url);
        // 1 level deep
        cy.get(".app > .grandfather > .father")
          .children(".person")
          .should("have.length", `1`);

        cy.get(".app > .grandfather > .uncle")
          .children(".person")
          .should("have.length", `3`);

        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it("Check the grandchild structure", () => {
        cy.visit(url);
        cy.get(".app > .grandfather > .father> .person")
          .children(".children")
          .should("have.length", `3`);

        cy.get(".app > .grandfather > .uncle >.person")
          .eq(1)
          .children(".children")
          .should("have.length", `3`);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1
      it("Check the great-grandchild structure", () => {
        cy.visit(url);
        cy.get(".app > .grandfather > .father > .person>.children")
          .eq(2)
          .children("div")
          .should("have.length", 3);

        cy.get(".app > .grandfather > .uncle > .person> .children")
          .eq(1)
          .children("div")
          .should("have.length", 3);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it(`Check the flex in person inside father`, () => {
        cy.visit(url);
        cy.get(".father>.person>.children")
          .parent()
          .should("have.css", "display", "flex");
         cy.get(".father>.person").should("not.have.attr","style")
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it(`Text alignment in uncle`, () => {
        cy.visit(url);
        cy.get(".uncle")
          .children()
          .each((childelement) => {
            cy.wrap(childelement).should("have.css", "text-align", "center").should("not.have.attr","style");
          });        
        cy.get(".uncle>.person")
          .eq(1)
          .children()
          .each((childelement) => {
            cy.wrap(childelement).should("have.css", "text-align", "center");
          });
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it("Check the fontsize of great-grandchild elements in father", () => {
        cy.visit(url);
        cy.get(".app > .grandfather > .uncle > .person")
          .eq(1)
          .children(".children")
          .eq(1)
          .children("div")
          .each(($childElement) => {
            cy.wrap($childElement)
              .invoke("css", "font-size") // Access the font-size CSS property
              .should("be.equal", "40px");
          });          
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it("Check the fontsize of great-grandchild elements in uncle", () => {
        cy.visit(url);
        cy.get(".app > .grandfather > .uncle > .person")
          .eq(1)
          .children(".children")
          .eq(1)
          .children("div")
          .each(($childElement) => {
            cy.wrap($childElement)
              .invoke("css", "font-size") // Access the font-size CSS property
              .should("be.equal", "40px");
          });
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it("Child element should have borders as 1px solid black", () => {
        cy.visit(url);
        cy.get(".children").should("not.have.attr","style");
        cy.get(".children").should("have.css", "border-style", "solid");
        cy.then(() => {
          acc_score += 1;
        });
      });
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id: ele.id,
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