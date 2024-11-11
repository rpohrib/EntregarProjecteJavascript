import { shallowMount } from "@vue/test-utils";
import Calculadora from "@/components/Calculadora.vue";

describe("Calculadora.vue", () => {
  it("afegeix valors al display", () => {
    const wrapper = shallowMount(Calculadora);
    wrapper.vm.appendValue("5");
    expect(wrapper.vm.display).toBe("5");
    wrapper.vm.appendValue("3");
    expect(wrapper.vm.display).toBe("53");
  });

  it("opera correctament amb els operadors", () => {
    const wrapper = shallowMount(Calculadora);
    wrapper.vm.appendValue("8");
    wrapper.vm.operate("+");
    wrapper.vm.appendValue("2");
    expect(wrapper.vm.display).toBe("8 + 2");
  });

  it("calcula correctament", () => {
    const wrapper = shallowMount(Calculadora);
    wrapper.vm.appendValue("8");
    wrapper.vm.operate("+");
    wrapper.vm.appendValue("2");
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe("10");
  });

  it("gestiona els errors en el càlcul", () => {
    const wrapper = shallowMount(Calculadora);
    wrapper.vm.appendValue("8");
    wrapper.vm.operate("/");
    wrapper.vm.appendValue("0");
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe("Infinity"); // o potser "Error"
  });

  it("neteja el display correctament", () => {
    const wrapper = shallowMount(Calculadora);
    wrapper.vm.appendValue("8");
    wrapper.vm.clear();
    expect(wrapper.vm.display).toBe("");
  });
});
