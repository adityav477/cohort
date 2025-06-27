import { describe, it, expect } from "vitest";
import app from "..";
import request from "supertest";

describe("post /sum", () => {
  it("Should add the and give the addition", async () => {
    const { status, body } = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    })

    expect(status).toBe(200);
    expect(body).toEqual({ answer: 3, id: expect.any(Number) });
  })
})
