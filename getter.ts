let GLOBAL_NAMES = new Set<string>();

export class EnvVar {
  public constructor(private name: string, private value?: string) {}

  public required(): this {
    if (this.value == null) {
      throw new Error(`Env variable ${this.name} is required but not provided.`);
    }
    return this;
  }

  public asString(): string {
    return this.value;
  }

  public asNumber(): number {
    let value = Number(this.value);
    if (isNaN(value)) {
      throw new Error(`Env variable ${this.name} is not a number`);
    }
    return value;
  }

  public asBoolean(): boolean {
    return Boolean(this.value);
  }
}

export function getEnvVar(name: string): EnvVar {
  if (GLOBAL_NAMES.has(name)) {
    throw new Error(`Env variable ${name} has already been defined.`);
  }
  return new EnvVar(name, process.env[name]);
}
