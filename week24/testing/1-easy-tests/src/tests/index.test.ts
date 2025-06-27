import { describe, expect, it } from "@jest/globals";
import app from "..";
import request from "supertest";

describe("Testing the sum function", () => {
  it("Sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2
    })

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  })

  it("shoud return the sum of two negative numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: -1,
      b: -2
    })

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(-3);
  })
})

