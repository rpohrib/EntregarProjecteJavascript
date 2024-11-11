import { shallowMount } from "@vue/test-utils";
import AxiosData from "@/views/AxiosData.vue";
import axios from "axios";
import flushPromises from "flush-promises";

jest.mock("axios"); // Moca axios

describe("AxiosData.vue", () => {
    it("carrega i mostra els usuaris de l'API", async () => {
        const users = [
          { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
          { id: 2, firstName: "Jane", lastName: "Doe", email: "jane@example.com" }
        ];
        axios.get.mockResolvedValue({ data: { users } });
      
        const wrapper = shallowMount(AxiosData);
        await flushPromises(); // Espera que es resolguin les promeses
      
        expect(wrapper.findAll("li").length).toBe(users.length);
        expect(wrapper.text()).toContain("John Doe - john@example.com");
        expect(wrapper.text()).toContain("Jane Doe - jane@example.com");
      });
});
